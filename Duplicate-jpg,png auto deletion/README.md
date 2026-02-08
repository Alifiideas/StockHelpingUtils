# Remove Duplicate Images (MD5 Hash)

A Python script that scans a folder (including subfolders),
detects **exact duplicate image files**, and permanently deletes
the duplicates using file hash comparison.

This is especially useful for cleaning up **Adobe Illustrator
export folders** (PNG/JPG) after batch exports or stock preparation.

---

## ✨ Features

- 🔍 Detects **exact duplicates** using MD5 hash
- 🗑 Automatically deletes duplicate images
- 📁 Works recursively (all subfolders)
- 🖼 Supports `.jpg`, `.jpeg`, `.png`
- ⚡ Fast and memory-efficient
- 🧠 Keeps the *first occurrence*, removes the rest

---

## 📦 Requirements

- Python 3.7+
- No external libraries required (uses built-in modules only)

Check Python version:
```bash
python --version
🚀 How to Use
1️⃣ Edit Folder Path
Open the script and change this line:

folder = r"E:\zuzzle ideas\png\222"
Replace it with your image export folder path.

2️⃣ Run the Script
From Command Prompt or Terminal:

python remove_duplicate_images.py
3️⃣ Output Example
Deleted duplicate: E:\exports\icon_12.png
Deleted duplicate: E:\exports\icon_12_copy.png

Done! Deleted 27 duplicate image files.
⚠ Deleted files are permanently removed (not sent to recycle bin).

Just paste it in txt file and save it as py and use it.
