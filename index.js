var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var contacts = [
    {
        name: "peter parker",
        age: 21,
        email: "peter@mit.edu",
        courses: [
            {number: "1.00", name: "engr comp"},
            {number: "3.00", name: "intro bio"}
        ]
    },
    {
        name: "diana prince",
        age: 704,
        email: "diana@mit.edu",
        courses: [
            {number: "2.00", name: "intro arch"},
            {number: "1.00", name: "intro chem"}
        ]
    },
    {
        name: "bruce wayne",
        age: 41,
        email: "bruce@mit.edu",
        courses: [
            {number: "2.00", name: "intro ME"},
            {number: "3.00", name: "intro MS"}
        ]
    }
]
var schema = buildSchema(`
  type Query{
    contact(id: Int): Contact
    contacts: [Contact]
  },
  type Contact {
      name: String
      email: String
      age: Int
      courses:[Course]
  }
  type Course{
      number: String
      name: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  contact: (arg)=>contacts[arg.id],
  contacts : ()=> contacts
};


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, ()=> console.log("Running Graphql on Port:4000!"));