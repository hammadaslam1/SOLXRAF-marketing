import Image from "../models/image.model.js";
import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("testImage");

export const uploadImage = async (req, res, next) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      if (!req.body.name) {
        return res.status(400).json({ message: "Name is required" });
      }

      // Read the file data from the disk
      const fileData = fs.readFileSync(req.file.path);

      const newImage = new Image({
        name: req.body.name,
        image: {
          data: fileData,
          contentType: "image/*",
        },
      });

      await newImage.save();

      res
        .status(201)
        .json({ message: "Successfully uploaded", image: newImage });
    });
  } catch (error) {
    next(error);
  }
};
