# Remove Blank Lines from TXT Files (Folder Cleaner)

A Python script that removes all blank or whitespace-only lines
from every `.txt` file inside a selected folder.

It can also:
- Process subfolders
- Create automatic backups before editing
- Clean multiple files in one run

Perfect for Adobe Illustrator workflows involving:
- Keyword lists
- Metadata exports
- Stock descriptions
- Prompt lists
- Title batches

---

## ✨ Features

- 🧹 Removes empty lines from `.txt` files
- 📁 Supports full folder and subfolders
- 💾 Optional automatic backup (.bak)
- ⚡ Fast batch processing
- 🧠 Keeps formatting and encoding safe

---

## 📦 Requirements

- Python 3.7+
- No external libraries required

Check Python version:

```bash
python --version
⚙ Configuration
Inside the script:

folder = r"E:\adobe stock files\teapot\Rose line art with butterfly landing on petal"
include_subfolders = True
backup_original = True
Options
folder
Target folder containing .txt files

include_subfolders

True → scans all subfolders

False → scans only main folder

backup_original

True → saves original file as .bak

False → edits directly

🚀 How to Use
1️⃣ Edit Folder Path
Change the folder path to your working directory.

2️⃣ Run Script
python remove_blank_lines_folder.py
3️⃣ Example Output
✅ Cleaned: keywords.txt (14 blank lines removed)
✅ Cleaned: titles.txt (6 blank lines removed)

🎉 All .txt files cleaned successfully!
