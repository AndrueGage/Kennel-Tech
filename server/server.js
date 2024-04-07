import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs, resolvers } from './schemas/index.js'

import { connectToDatabase } from './config/connection.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const db = await connectToDatabase();
    return { db };
  },
});

console.log(`🚀  Server ready at: ${url}`);