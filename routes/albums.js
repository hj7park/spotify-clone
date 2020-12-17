
var express = require('express');
var router = express.Router();
let importCtrl = require("../controllers/albumsCtrl");

/* GET home page. */
router.get('/',importCtrl.showAlbum);

router.get('/:aid', importCtrl.selectAlbum);

router.get('/:aid/tracks', importCtrl.showTrack);

router.get('/:aid/tracks/:tid', importCtrl.selectTrack);


//Track Submit
router.get('/:aid/submit', importCtrl.submitTrack);

router.post('/:aid/submit-form', importCtrl.submitTrackForm);

module.exports = router;
