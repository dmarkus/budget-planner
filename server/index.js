const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');

const server = new ApolloServer({ typeDefs });
