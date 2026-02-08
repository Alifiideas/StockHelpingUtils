# EPS to PNG Converter (with Transparency)

A Python script that batch-converts `.EPS` files into `.PNG` format
using Pillow (PIL). The script preserves transparency by exporting
images in **RGBA** mode.

This is ideal for Adobe Illustrator users who export EPS files and need
clean PNG versions for stock platforms, web use, or previews.

---

## ✨ Features

- 🖼 Batch converts **EPS → PNG**
- 🎨 Keeps **transparent background (RGBA)**
- 📁 Works on all EPS files in a folder
- ⚡ Simple and fast
- 🧠 No filename changes (same base name)

---

## 📦 Requirements

- Python 3.7+
- Pillow (PIL)

Install Pillow if not installed:
```bash
pip install pillow
⚠ Ghostscript must be installed for EPS support
(Required by Pillow to open EPS files)

🚀 How to Use
1️⃣ Set Folder Paths
Edit these lines in the script:

input_folder = r"E:\Adobe stock ai\adobe stock files\1ideas\All in one\1\digital5"
output_folder = r"E:\Adobe stock ai\adobe stock files\1ideas\All in one\1\digital5"
input_folder → folder containing EPS files

output_folder → where PNG files will be saved

You can use the same folder or a separate output folder.

2️⃣ Run the Script
python eps_to_png.py
3️⃣ Output Example
Converted: icon_01.eps → icon_01.png
Converted: icon_02.eps → icon_02.png
