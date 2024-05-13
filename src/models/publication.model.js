const {model, Schema } = require('mongoose');

const postSchema = new Schema({
    title: String,
    description: String,
    img: String,
    git: String,
    url: String,
    status: Boolean,

}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('post', postSchema);