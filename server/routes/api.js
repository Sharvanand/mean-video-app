const express = require('express');
const router  = express.Router();
const Video   = require('../models/video');

router.get('/', (req, res) => {
    Video.getVideos((err, videos)=>{
        res.json(videos);
    });
});

router.post('/',(req, res)=>{
    var newVideo = {
        title : req.body.title,
        url : req.body.url,
        description : req.body.description
    };
    Video.addVideo(newVideo,(err, video)=>{
        if(err) throw err;
        res.json(video);
    });
});




module.exports = router;