const { gql } = require('apollo-server');

type IncomeType {
    name: String,
}

type IncomeItem {
    id: ID!,
    name: String
}

// TODO: add schema
const typeDefs = gql`
    
`;

module.exports = typeDefs;