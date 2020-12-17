let importAlbum = require("../models/albumsmodel");
let albums = importAlbum.albumsArray;

function showAlbum(req, res, next) {
    res.render("albums.ejs",{albums});
}

function selectAlbum(req, res, next) {
    let album = importAlbum.findAlbum(req.params.aid);
    res.render("albumsSelect.ejs",{album});
}

function showTrack(req,res,next){
    let album = importAlbum.findAlbum(req.params.aid);
    res.render("tracks.ejs",{album});
}

function selectTrack(req,res,next){
    let track = importAlbum.findTrack(req.params.aid, req.params.tid);
    res.render("tracksSelect.ejs",{track});
}

function submitTrack(req, res, next) {
    let album = importAlbum.findAlbum(req.params.aid);
    res.render("tracksubmit.ejs",{album});
}

function submitTrackForm(req, res, next) {
    let album = importAlbum.findAlbum(req.params.aid);
    importAlbum.addTrack(req.params.aid,req.body.track_name);
    res.redirect("./tracks");
}


module.exports={
    showAlbum,
    selectAlbum,
    showTrack,
    selectTrack,
    submitTrack,
    submitTrackForm
}