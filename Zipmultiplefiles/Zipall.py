import os
import zipfile
import re

source_folder = r"D:\111111111111111111\extra space\22"

# SAFE output folder
zip_folder = r"C:\Users\soaib\Desktop\zips\22"
os.makedirs(zip_folder, exist_ok=True)

def safe_name(name):
    # Remove illegal/problematic characters
    name = re.sub(r'[<>:"/\\|?*#()]', '', name)
    return name.strip()

files = os.listdir(source_folder)

jpg_files = {f.lower(): f for f in files if f.lower().endswith(".jpg")}

for file in files:
    if file.lower().endswith(".eps"):
        base = os.path.splitext(file)[0]
        eps_path = os.path.join(source_folder, file)

        jpg_key = base.lower() + ".jpg"
        if jpg_key in jpg_files:
            jpg_file = jpg_files[jpg_key]
            jpg_path = os.path.join(source_folder, jpg_file)

            zip_name = safe_name(base) + ".zip"
            zip_path = os.path.join(zip_folder, zip_name)

            with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
                zipf.write(eps_path, arcname=file)
                zipf.write(jpg_path, arcname=jpg_file)

            print(f"✔ ZIP created: {zip_name}")
        else:
            print(f"✖ No JPG for: {file}")
