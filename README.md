# miniature-umbrella

Express and GraphQL exercise

1.) Clone project to new folder.

2.) Within the new folder apply terminal command: "npm install express-graphql graphql --save".

3.) run index.js with terminal command: "node index.js".

4.) Navigate to" "http://localhost:5500/graphql" to view the GraphiQL interface!

5.) Test the interaction by typing: "{restaurants}".

6.) Use: query getrestaurants($sid:Int!){
    contact(id:$sid){
name
description
(etc.)

    }
    }

to grab single restaurant within database. Make sure to declare your Query variable such as "sid" within example to correct id you are trying to get.
