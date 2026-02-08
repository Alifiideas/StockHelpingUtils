# GroupConnectedOrNearShapes_Fast_RGB.jsx

A high-performance Adobe Illustrator script that automatically groups
touching or nearby shapes using a spatial grid and union-find algorithm.
The script ensures the document is in **RGB color mode** and preserves
all original fills, strokes, and appearances.

---

## ✨ Features

- ⚡ **Fast grouping** even with hundreds or thousands of objects
- 📐 Groups shapes that are **touching or within tolerance distance**
- 🧠 Uses **spatial hashing** to avoid slow full comparisons
- 🎨 Forces **RGB color mode** (no color conversion issues)
- 🧩 Preserves original appearance (fills, strokes, effects)
- 🗂 Creates clean Illustrator **GroupItems**

---

## 📦 Requirements

- Adobe Illustrator (tested with CC 2020+)
- Objects must be **selected** before running the script
- Works with:
  - Paths
  - Compound paths
  - Shapes
  - Most visible artwork items

---

## 🚀 How to Install

1. Save the file as:

GroupConnectedOrNearShapes_Fast_RGB.jsx


2. Copy it to Illustrator’s Scripts folder:

**Windows**
C:\Program Files\Adobe\Adobe Illustrator [version]\Presets\en_US\Scripts\


**macOS**
/Applications/Adobe Illustrator [version]/Presets/en_US/Scripts/


3. Restart Adobe Illustrator

---

## ▶ How to Use

1. Open your Illustrator document
2. Select **multiple shapes or objects**
3. Go to:

File → Scripts → GroupConnectedOrNearShapes_Fast_RGB


4. The script will:
- Switch the document to **RGB mode**
- Detect touching or nearby objects
- Group connected objects together automatically

5. A confirmation message will show how many groups were created

---

## ⚙ Script Settings

Inside the script:

```js
var tol = 5.0; // tolerance in points
Increase value → looser grouping (objects farther apart)

Decrease value → stricter grouping (almost touching only)

Recommended range:

3 – 8 for icons / line art

8 – 15 for complex illustrations
