import os
import hashlib

def file_hash(path, block_size=65536):
    hasher = hashlib.md5()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(block_size), b""):
            hasher.update(chunk)
    return hasher.hexdigest()


def remove_duplicate_images(folder_path):
    seen_hashes = {}
    deleted_files = 0

    for root, _, files in os.walk(folder_path):
        for filename in files:
            if filename.lower().endswith((".jpg", ".jpeg", ".png")):
                file_path = os.path.join(root, filename)

                try:
                    h = file_hash(file_path)

                    if h in seen_hashes:
                        os.remove(file_path)
                        deleted_files += 1
                        print(f"Deleted duplicate: {file_path}")
                    else:
                        seen_hashes[h] = file_path

                except Exception as e:
                    print(f"Failed to process {file_path}: {e}")

    print(f"\nDone! Deleted {deleted_files} duplicate image files.")


if __name__ == "__main__":
    folder = r"E:\zuzzle ideas\png\222"
    remove_duplicate_images(folder)
