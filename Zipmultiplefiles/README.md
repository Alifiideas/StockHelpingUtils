# EPS + JPG Auto ZIP Packager

A Python script that automatically creates ZIP files by pairing
`.EPS` vector files with their matching `.JPG` preview images.

Each ZIP contains:
- 1 EPS file (vector)
- 1 JPG file (preview)

This script is ideal for Adobe Illustrator users preparing files
for stock websites such as Adobe Stock, Shutterstock, Freepik, etc.

---

## ✨ Features

- 📦 Automatically creates ZIP files
- 🧠 Matches EPS and JPG by filename
- 🧼 Cleans unsafe characters from ZIP names
- 📁 Separate safe output folder
- ⚡ Fast batch processing
- ❌ Skips EPS files without matching JPG

---

## 📦 Requirements

- Python 3.7+
- No external libraries needed

Check Python version:
```bash
python --version
⚙ Configuration
Edit these paths in the script:

source_folder = r"D:\your\eps_and_jpg_folder"
zip_folder = r"C:\Users\YourName\Desktop\zips"
Path meaning
Path	Description
source_folder	Folder containing EPS and JPG files
zip_folder	Output folder for ZIP packages
🚀 How to Use
1️⃣ Put EPS and JPG files in one folder

Example:

flower_01.eps
flower_01.jpg
flower_02.eps
flower_02.jpg
2️⃣ Run the script:

python eps_jpg_to_zip.py
3️⃣ Result:

flower_01.zip
flower_02.zip
Each ZIP contains:

flower_01.eps

flower_01.jpg

