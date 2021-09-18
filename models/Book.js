import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    editorial: {type: String, required: true },
    edition: {type: Number, required: true }
},{timestamps:true});

const Book = mongoose.model('Book', bookSchema);

export default Book;