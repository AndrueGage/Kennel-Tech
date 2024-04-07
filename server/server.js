import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { connectToDatabase } from './config/connection.js';

const app = express();
const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use('/graphql', express.json(), expressMiddleware(server, {
  context: async () => {
    const db = await connectToDatabase();
    return { db };
  },
}));

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
});