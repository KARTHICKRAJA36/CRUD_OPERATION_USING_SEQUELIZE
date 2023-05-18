const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now());
    },
  });
  
  const upload = multer({ storage: storage });
  
  function uploadMiddleware(req, res, next) {
    upload.single('image')(req, res, function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  }
  module.exports = uploadMiddleware;


  