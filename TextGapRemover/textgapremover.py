# remove_blank_lines_folder.py
# Removes all blank or whitespace-only lines from every .txt file in a folder

import os

# === CONFIGURATION ===
folder = r"E:\adobe stock files\teapot\Rose line art with butterfly landing on petal"   # <-- change this to your folder path
include_subfolders = True            # set to False if you want only top-level files
backup_original = True               # set to True to keep a backup (.bak) before cleaning

# === PROCESS ===
def remove_blank_lines(file_path):
    """Removes blank or whitespace-only lines from a text file."""
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()

    clean_lines = [line for line in lines if line.strip()]

    if backup_original:
        backup_path = file_path + ".bak"
        if not os.path.exists(backup_path):
            with open(backup_path, "w", encoding="utf-8") as b:
                b.writelines(lines)

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(clean_lines)

    print(f"✅ Cleaned: {file_path} ({len(lines) - len(clean_lines)} blank lines removed)")

# === MAIN LOOP ===
for root, dirs, files in os.walk(folder):
    for file in files:
        if file.lower().endswith(".txt"):
            file_path = os.path.join(root, file)
            remove_blank_lines(file_path)
    if not include_subfolders:
        break

print("\n🎉 All .txt files cleaned successfully!")
