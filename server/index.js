const { ApolloSconst typeDefs = require('./src/schema');erver } = require('apollo-server');
const typeDefs = require('./src/schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});