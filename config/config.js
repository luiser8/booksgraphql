export const PORT = 9000;
export const environment = {
    development: {
        url: `http://localhost:${PORT}/`,
        db: 'mongodb://localhost:27017/books',
    },
    production: {
        url: `http://localhost:${PORT}/`,
        db: 'mongodb+srv://books-user:PwgzLA4TgggQpMNs@cluster0.1vqkk.mongodb.net/books?retryWrites=true&w=majority'
    }
}