let albumsArray =[
    {id:"a0", name:"Thriller", artist:"MJ", description:"MJ is a legend", tracks:[{id:"t0", name:"billie jean"},{id:"t1", name:"beat it"}]},
    {id:"a1", name:"Baby One More Time", artist:"Britney" , description:"Britney is a legend", tracks:[{id:"t0", name:"The Beat goes on"},{id:"t1", name:"Sometimes"}]}
];

function findAlbum(inputID){
    let selectedAlbum;
    albumsArray.forEach(function(album){
        if(inputID == album.id)
        {
            selectedAlbum = album;
        }
    });
    return selectedAlbum;
}

function findTrack(aid,tid){
    let selectedTrack;
    albumsArray.forEach(function(album){
        if(aid == album.id)
        {
            album.tracks.forEach(function(track){
                if(track.id == tid)
                {
                    selectedTrack = track;
                }
            });
        }
    });
    return selectedTrack;
}

function addAlbum(inputName,inputArtist,inputDescription){
    let newId = "a" + albumsArray.length;
    albumsArray.push({id:newId, name:inputName, artist:inputArtist, description:inputDescription, tracks:[]});
}

function addTrack(aid,trackName){
    albumsArray.forEach(function(album){
        if(aid == album.id)
        {
            let newTId = "t" + album.tracks.length;
            album.tracks.push({id:newTId, name:trackName});
        }
    });
}


module.exports ={
    albumsArray,
    findAlbum,
    findTrack,
    addAlbum,
    addTrack
};