import  '../db/dbConn.js';
import Book from '../models/Book.js';

export const resolvers={
    Query:{
            getAllBooks:(root)=>{
                return new Promise((resolve,reject)=>{
                    Book.find((err,books)=>{
                        if(err) reject(err);
                        else resolve(books);
                    })
                })
            },
            getIdBooks:(root, {id})=>{
                return new Promise((resolve,reject)=>{
                    Book.findOne({_id:id},(err,books)=>{
                    if(err) reject(err);
                    else resolve(books);
                })
            })
        }
    },
    Mutation:{
        createBook: (root,{ input }) => {
            const newBook=new Book({
                name : input.name,
                author : input.author,
                editorial: input.editorial,
                edition: input.edition
            });

            newBook.id=newBook._id;

            return new Promise((resolve,reject)=>{
                newBook.save((err)=>{
                    if(err) reject(err);
                    else resolve(newBook);
                })
            })
        },
        editBook: (root,{ input }) => {
            const id = input.id;
            const changeBook = { 
                _id : input.id,
                name : input.name,
                author : input.author,
                editorial: input.editorial,
                edition: input.edition 
            };

            return new Promise((resolve,reject)=>{
                Book.findByIdAndUpdate(id, changeBook, { new: true }, (err)=>{
                    if(err) reject(err);
                    else resolve(id);
                })
            })
        },
        deleteBook: (root,{ id }) => {
            return new Promise((resolve,reject)=>{
                Book.findByIdAndDelete({_id : id},(err)=>{
                    if(err) reject(err);
                    else resolve(id);
                })
            })
        },
    },
};