const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title : String,
    url   :String,
    description : String

});

const Video = module.exports = mongoose.model('Video', videoSchema, 'video');

module.exports.getVideos = (callback) => {
    Video.find(callback);
}

module.exports.addVideo = (newVideo, callback) =>{
Video.create(newVideo, callback)
}