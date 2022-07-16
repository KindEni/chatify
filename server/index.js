const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        text: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, text: String!): ID!
    }

    type Subscription {
        messages: [Messages!]
    }
`