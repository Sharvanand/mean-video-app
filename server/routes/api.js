const express = require('express');
const router  = express.Router();
const Video   = require('../models/video');

router.get('/', (req, res) => {
    Video.getVideos((err, videos)=>{
        res.json(videos);
    });
});

router.get('/:_id',(req, res) =>{
    Video.getVideo(req.params._id,(err, video)=>{
        res.json(video)
    })
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

router.put('/:_id',(req, res)=>{
    var newUpdate ={
        title:req.body.title,
        url:req.body.url,
        description:req.body.description
    }
    Video.updateVideo(req.params._id, newUpdate, (err, video)=>{
        if(err) throw err;
        res.json(video);
    });
});


router.delete('/:_id',(req, res) =>{
    Video.deleteVideo(req.params._id,(err, video) =>{
        if(err) throw err;
        res.json(video);
    });
});




module.exports = router;