const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    data: {
        type: Buffer,
    },
    size: {
        Type: Number,
    },
    mimetype: {
        Type: String,
    },
});

const FileModel = mongoose.model('FileModel', FileSchema);
module.exports = FileModel;