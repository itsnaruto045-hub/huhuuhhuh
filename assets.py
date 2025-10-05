import os
import base64

# Assets folder
assets_folder = "CPSCM_English_Nebula/assets"
os.makedirs(assets_folder, exist_ok=True)

# Base64 placeholder PNG (1x1 transparent)
placeholder_base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn0B9HhBjZsAAAAASUVORK5CYII="

# List of asset filenames
assets = [
    "placeholder-1.png",
    "placeholder-2.png",
    "faculty-1.jpg",
    "faculty-2.jpg",
    "faculty-3.jpg",
    "faculty-4.jpg",
    "faculty-5.jpg",
    "faculty-6.jpg",
    "og-image.png"
]

# Create each asset file from base64
for asset in assets:
    path = os.path.join(assets_folder, asset)
    with open(path, "wb") as f:
        f.write(base64.b64decode(placeholder_base64))

print("✅ All placeholder assets created in 'assets' folder")
