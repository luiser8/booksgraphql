import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Book{
       id:ID
       name:String
       author:String
       editorial:String
       edition:Int
    }

    input BookInput{
       id:ID
       name:String
       author:String
       editorial:String
       edition:Int
    }

    type Query{
        getAllBooks:[Book]
        getIdBooks(id:ID):Book
    }

    type Mutation{
        createBook(input:BookInput):Book,
        editBook(input:BookInput):Book,
        deleteBook(id:ID):Book
    }
`;