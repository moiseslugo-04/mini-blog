import cloudinary
from cloudinary import CloudinaryImage
import cloudinary.uploader
import cloudinary.api
from app.config import CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRETE_API_KEY

cloudinary.config(
    cloud_name = CLOUDINARY_NAME,
    api_key = CLOUDINARY_API_KEY,
    api_secret = CLOUDINARY_SECRETE_API_KEY
)