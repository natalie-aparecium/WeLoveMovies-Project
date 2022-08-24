# WeLoveMovies-Project

You've been hired on as a backend developer for a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.
![image](https://user-images.githubusercontent.com/78841093/186514096-24f9c7a5-9879-412a-9df9-9e49ce88768a.png)
This project is designed to test your ability to both build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate you can do the following:

* Install and use common middleware packages.
* Receive requests through routes.
* Running tests from the command line.
* Access relevant information through route and query parameters.
* Create an error handler for the case where a route does not exist.
* Build an API following RESTful design principles.
* Create and customize a knexfile.js file.
* Create a connection to your database with Knex.
* Write database queries to complete CRUD routes in an Express server.
* Return joined and nested data with Knex.
* Write database migrations using Knex's migration tools.
* Deploy your backend server to a cloud service.

You will not need to make any edits to HTML or CSS for this project.
## Project setup
Follow the instructions below to get this project up and running on your own machine:
* Run npm install to install the project.
## Running tests
To run the tests, you can run the following command:
```sh
npm test
```
## Instructions
You are tasked with both setting up the database and building a number of routes that will be used by the frontend application. For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.
## General tasks
* Your app.js file and server.js file are correctly configured, with your app.js file exporting the application created from Express.
* You make use of the cors package so that requests from the frontend can correctly reach the backend.
* If a request is made to a route that does not exist, the server returns a 404 error.
* If a request is made to a route that exists, but the HTTP method is wrong, a 405 error is returned.
* All of your routes should respond with the appropriate status code and should use a data key in the response.

## Database tables
* You will create five tables for this project. View the docs/tables/ folder in this project to get more detailed information on each table.
* You will need to create migrations for each of these tables and run those migrations.
* Seed data is included in this project in the ./src/db/seeds folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.

## Routes
* You will create five routes for this project. View the docs/routes/ folder in this project to get more detailed information on each table.
Note that some routes return data dependent on query parameters.

## Requirements to pass

For your project to pass, all of the following statements must be true. These criteria are reflected in the rubric in the following lesson.

* All the tests are passing in Qualified.
* The migrations can be correctly run and rolled back.
* The seed command can be run multiple times and work correctly.
* A response is included for Method Not Allowed.
* The cors package is included.
* The entire application is deployed and working.
