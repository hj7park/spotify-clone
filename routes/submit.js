var express = require('express');
var router = express.Router();
let importCtrl = require("../controllers/submitCtrl");

/* GET home page. */
router.get('/', importCtrl.submitAlbum);

router.post('/submit-form', importCtrl.submitAlbumForm);

module.exports = router;
