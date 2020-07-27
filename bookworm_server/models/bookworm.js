const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    authors: {type: Array, required: true},
    subtitle: {type: String},
    description: {type: String},
    thumbnail: {type: String, default: "img/book_default_thumbnail.jpeg"},
    smallimg: {type: String}, 
    isFavorite: {type: Boolean, default: false},
    myCollection: {type: Boolean}
})

module.exports = mongoose.model('Book', bookSchema)