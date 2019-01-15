var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../tmp/', limits: {fileSize: 3500000} });
const fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/monupload', upload.array('monfichier', 4), function (req, res, next) {
	for(let i =0; i < (req.files).length; i++){ 
	fs.rename(req.files[i].path, '../public/images/' + req.files[i].originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
	console.log(err);
    } else {
        res.send(req.files);
    }
  });
	};
})

module.exports = router;
