import express from 'express';
import path from'path';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../data/resolvers.js';
import { typeDefs } from '../data/schema.js';
import { PORT } from '../config/config.js';

// Server Apollo init
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
await server.start();
server.applyMiddleware({ app });

// view engine setup
const __dirname = path.dirname('views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { error: false, message:'Graphql Server' })
});

// Port listen
app.listen({ port: PORT }, () => {
    console.log(`Server http://localhost:9000${server.graphqlPath}`);
});