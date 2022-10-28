// Init Multer
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//User Image Multer
const userPhoto = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../public/images'));
        },
        filename: (req, file, cb) => {
          cb(null, Date.now()+ file.originalname);
        },
      });
      
      return multer({
        storage,
      }).single('image');
}

//Exports
module.exports = userPhoto;