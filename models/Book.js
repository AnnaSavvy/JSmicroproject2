// mongoose schema

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    book_id: { 
        type: String,
        requred: [true, 'ID requred'],
        unique: true
    },
    title: { 
        type: String,
        requred: [true, 'Name requred'],
    },
    author: {
        type: String,
        requred: [true, 'Auhtor requred'],
        minlength: [3, 'At least 3 characters']
    },
    genre: {
        type: String,
        enum: ['Education', 'Fantasy', 'Science Fiction', 'Horror', 'Romance', 'Children', 'History', 'Mystery' ]
    },
    published_year: {
        type: Number,
    }
})

const Book = mongoose.model('Book', bookSchema);

export default Book;

