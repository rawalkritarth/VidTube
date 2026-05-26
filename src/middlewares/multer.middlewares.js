import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const randomStr = crypto.randomBytes(16).toString("hex");
    const name = `${Date.now()}-${randomStr}${ext}`;
    cb(null, name);
  }
})

export const upload = multer({ storage })



