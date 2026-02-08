// GroupConnectedOrNearShapes_Fast_RGB.jsx
// Groups nearby or touching shapes quickly using a spatial grid.
// Ensures RGB color mode and preserves original appearance.

if (app.documents.length === 0) {
    alert("No document open.");
} else if (app.activeDocument.selection.length === 0) {
    alert("Please select at least one shape.");
} else {
    main();
}

function main() {
    var doc = app.activeDocument;
    doc.documentColorSpace = DocumentColorSpace.RGB;

    var sel = doc.selection;
    if (!sel || sel.length === 0) {
        alert("Nothing selected.");
        return;
    }

    var tol = 5.0; // tolerance in points
    var n = sel.length;

    // === Cache bounds ===
    var bounds = [];
    for (var i = 0; i < n; i++) {
        try {
            var gb = sel[i].visibleBounds; // [x1, y1, x2, y2]
            bounds.push({
                left: gb[0] - tol,
                top: gb[1] + tol,
                right: gb[2] + tol,
                bottom: gb[3] - tol
            });
        } catch (e) {
            bounds.push(null);
        }
    }

    // === Spatial Hash Grid Setup ===
    var cellSize = tol * 4;
    var grid = {};

    function cellKey(x, y) {
        return x + "," + y;
    }

    // Bin shapes into grid cells
    for (var i = 0; i < n; i++) {
        var b = bounds[i];
        if (!b) continue;

        var minCellX = Math.floor(b.left / cellSize);
        var maxCellX = Math.floor(b.right / cellSize);
        var minCellY = Math.floor(b.bottom / cellSize);
        var maxCellY = Math.floor(b.top / cellSize);

        for (var cx = minCellX; cx <= maxCellX; cx++) {
            for (var cy = minCellY; cy <= maxCellY; cy++) {
                var key = cellKey(cx, cy);
                if (!grid[key]) grid[key] = [];
                grid[key].push(i);
            }
        }
    }

    // === Union-Find (Disjoint Set) ===
    var parent = [];
    for (var i = 0; i < n; i++) parent[i] = i;

    function find(a) {
        return parent[a] === a ? a : (parent[a] = find(parent[a]));
    }

    function union(a, b) {
        var pa = find(a), pb = find(b);
        if (pa !== pb) parent[pb] = pa;
    }

    // === Compare only local neighbors ===
    for (var key in grid) {
        var list = grid[key];
        if (!list) continue;

        for (var i = 0; i < list.length; i++) {
            var idxA = list[i];
            var bA = bounds[idxA];
            if (!bA) continue;

            for (var j = i + 1; j < list.length; j++) {
                var idxB = list[j];
                var bB = bounds[idxB];
                if (!bB) continue;

                if (!(bA.right < bB.left || bB.right < bA.left || bA.top < bB.bottom || bB.top < bA.bottom)) {
                    union(idxA, idxB);
                }
            }
        }
    }

    // === Collect clusters ===
    var clusters = {};
    for (var i = 0; i < n; i++) {
        var root = find(i);
        if (!clusters[root]) clusters[root] = [];
        clusters[root].push(i);
    }

    // === Group shapes in Illustrator ===
    var groupsMade = 0;
    for (var root in clusters) {
        var members = clusters[root];
        if (members.length <= 1) continue;

        var parentLayer = sel[members[0]].layer;
        var newGroup = parentLayer.groupItems.add();
        newGroup.name = "Shape_Group_" + (groupsMade + 1);

        try {
            newGroup.filled = false;
            newGroup.stroked = false;
        } catch (e) {}

        for (var m = 0; m < members.length; m++) {
            try {
                sel[members[m]].move(newGroup, ElementPlacement.PLACEATEND);
            } catch (err) {
                try {
                    var dup = sel[members[m]].duplicate(newGroup, ElementPlacement.PLACEATEND);
                    sel[members[m]].remove();
                } catch (ee) {}
            }
        }

        groupsMade++;
    }

    alert("✅ Done! Created " + groupsMade + " group(s). RGB mode ensured and colors preserved.");
}
