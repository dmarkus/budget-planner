const { gql } = require('apollo-server');

// TODO: add schema
const typeDefs = gql`
    type Query {
        incomeTypes: [IncomeType]!
        monthlyIncomes(year: String, month: String): [IncomeItem]!
        me: User
    }

    type Mutation {
        login(email: String): User
    }

    type User {
        id: ID!
        email: String!
        token: String
    }

    type IncomeType {
        name: String,
    }

    type IncomeItem {
        id: ID!,
        name: String,
        year: String, 
        month: String
    }
 `;

module.exports = typeDefs;