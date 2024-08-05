Welcome to my eCommerce Project

This is the First project of my 5 weeks of Coding Challenge where I try and create a Full Stack Application once a week. 

While I am not the most talented Developer, I wanted to show that I have the desperation and grit to become a full fledged
Full Stack Software Engineer in this current tech environment. 


Here is what I started off with.

I first created the frontend and backend folders and downloaded my react app / react router dom into my frontend folder:

```npx create-react-app && npm install react-router-dom```

I then changed the title in the index.html to "eCommerce Website" and removed the boiler plate code from the App.js

Remember:

```npm start```
will be to run the frontend

I then cleaned up the starter template files from the src and public directories and proceeded to start working on my database.

I decided to use a NoSQL Database MongoDB / Mongoose as eCommerce websites can scale and adjust with a NoSQL db according to 
various research that I've done. 

CD into the backend directory and ```npm init -y``` into the terminal
This will create the configure files for the backend

Then we need to install all of the mongoose / MongoDB packages and etc.
```npm i express mongoose mongodb cors```

Next the plan is to connect mongoDB / mongoose to my app.

I started off by creating server.js file in the backend after installing the above packages. I then created a basic express server
that listens to the app on port 3000 to test out a basic "Hello World"

Now that I have express set up on the server.js, it's time to work on connecting everything to MongoDB / Mongoose.

Start off by checking on the MongoDB cluster that I've worked with. It was offline due to inactivity. I wanted to terminate that cluster anyways
since it's for an old project that I'm not working on anymore. 

Created a Config folder in the backend directory and created a db.js file inside of that config folder. I can work on connecting mongoose here. 
Mongoose is a library that helps handle object modeling via Node.js.

Once I established the connection, I made sure to download nodemon and dotenv to work with the dotenv
```npm i dotenv nodemon```

I then copied a templated connection code for db.js and then also went to my server.js to initialize the express app, connect the DB using connectDB function
and then made sure to have our app listen to port based on what is listed in the .env file.

One struggle that I'd like to not is that I was having some type of weird auth issue. Turns out, the password for my MongoDB cluster was wrong. So I just quickly changed it
on the security settings on MongoDB and then restarted the connection using
```node server.js``` 
in the backend directory.

Once we got that all set upo and connected, I started working on my Models and Seeders. We can worry about getting everything correct later. Let's start off by creating these
- Created a Models directory with a Product / Shopping Cart file in each to represent each model
- Created the redux store. I started off with the add, update, delete, and fetch actions for the cartAction.js. Then I did the same for the product as well.
- I was thinking of what to use for my API calls, controllers in the backend, or thunks in the frontend using redux store. I decided to go with the Controllers in the backend as I have never done it in this fashion. Only via redux thunks for my other three projects.
- I created a basic backend controller routes for the cart Controller. Nothing has been tested so far. Next, I plan to work on the redux store for the frontend and make a shopping cart component / a main page to display the products.
- Look up the MVC method. Model, View, Controller. This is a method that allows users to get an input from the view, where it goes from View > Controller > Model > Controller > View
