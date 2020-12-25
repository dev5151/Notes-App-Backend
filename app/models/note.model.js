const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    note: String,
    img: 
    { 
        data: Buffer, 
        contentType: String 
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);