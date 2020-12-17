let importAlbum = require("../models/albumsmodel");

function submitAlbum(req, res, next) {
    res.render("submit.ejs");
  }

function submitAlbumForm(req, res, next) {
    importAlbum.addAlbum(req.body.album_name,req.body.artist_name,req.body.descript_name);
    res.redirect("/albums");
  }


module.exports={
    submitAlbum,
    submitAlbumForm
}