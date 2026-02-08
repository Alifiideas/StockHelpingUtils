# EPS to JPG Converter (High Quality)

A Python script that batch-converts `.EPS` files into high-quality
`.JPG` images using Pillow (PIL).

Designed for Adobe Illustrator users who need JPG preview images
for stock platforms, catalogs, or client delivery.

---

## ✨ Features

- 🖼 Batch converts **EPS → JPG**
- 🎨 Converts to **RGB color mode**
- ⭐ High-quality output (JPEG quality = 100)
- 📁 Works on all EPS files in a folder
- ⚡ Simple and fast
- 🧠 Keeps original filenames

---

## 📦 Requirements

- Python 3.7+
- Pillow (PIL)
- Ghostscript (required for EPS support)

Install Pillow:
```bash
pip install pillow
🚀 How to Use
1️⃣ Set Folder Paths
Edit these lines in the script:

input_folder = r"E:\your\eps\folder"
output_folder = r"E:\your\jpg\output\folder"
You may use:

the same folder (EPS + JPG together), or

a separate output folder

2️⃣ Run the Script
python eps_to_jpg.py
3️⃣ Example Output
Converted: flower_01.eps → flower_01.jpg
Converted: flower_02.eps → flower_02.jpg
