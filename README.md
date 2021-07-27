# miniature-umbrella
Express and GraphQL exercise

1.)  Clone project to new folder.

2.) Within the new folder apply terminal command: "npm install express-graphql graphql   --save".  

3.)  run index.js with terminal command: "node index.js".

4.)  Navigate to" "http://localhost:4000/graphql" to view the GraphiQL interface!

5.)  Test the interaction by typing: "{contacts}".

6.)  Use: query getContact($sid:Int!){
    contact(id:$sid){
        name
        email
        age
        
    }
    }
to grab single contacts within database.  Make sure to declare your Query variable such as "sid" within example.


