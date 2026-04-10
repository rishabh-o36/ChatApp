import multer from "multer";

// store in memory (best for cloudinary)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB max
  },
});

export default upload;