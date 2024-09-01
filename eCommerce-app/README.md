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
- After making sure to export the cart controller to my routes, I created a variable called cart_controller to then be able to use and add the controllers to
my routes. 

I was able to start up my server but then found out that whenever I use the /cart on Postman, it wasn't producing anything and I get errors. 
This is because i don't have any type of seeders or have done anything with the database. I know that my DB is connected properly because when I test for the / 
home route, I am able to get the result of the app.use in my server.js 

<h1> eCommerce Practice </h1>. So now let's work on seeding my Database via Mongo / Express.

Seeders:
- I started off by trying to figure out how I should approach the seeding. I learned about faker.js through MongoDB articles about how to seed in the DB. 
- I created a seedProduct.js so that I could attempt to seed the randomized product data into the Mongo Database. 
- After importing Faker.js library, I created a function to generate seeders and to seed the seeders into the Database by connecting to the mongodb database.
- I had a validation error where the validation failed as the name: Path 'name' is required. After scouring the web for answers, i found out that my newly created products
that I needed to push need to have a path / name of 'name' prior to the productName. 

To run the seeder files you get on the backend directory and run in the terminal: 
```node seeders/seedProduct.js```
This should connect with MongoDB and show up in the Cluster. 

I've also created an unseedProduct.js file that will allow us to unseed our Database. 
```node seeders/unseedProduct.js```
as long as we're already in the backend directory. 

Now that I got the seeds to populate the DB, it's time to work on the routes and test via Postman. 
- First, I've created some basic routes to grab all of the products via the productController, product route, and server.js
- I created the productController first where I found the items via the schema and then returned a json response with a status of 200
- Then I created the route in the route directory and imported the fetchAllProducts function. Then I added it to my server.js in an app.use.
- I tested everything via postman and it is now showing up properly when fetching all products. 

Let's move on to the Frontend.
- I will need to create a few basic components; Home page with all of the products, an item page that goes into more details about the page, and then
lastly, the shopping cart itself. 
- Here is what i'll need: a route that let's me find an item based on itemId, controller / routes for the shopping cart feature, frontend for displaying all products

Let's start off with creating basic components:

Home Page (With all of the Products listed):
- Start off by creating the directories in the Component folder and creating the templated page. 
- Test the page out by traversing to it via the link on a live server. 
- Got the products to start listing on the localhost. There were some hiccups along the way, but it ended up working out. 
- I styled it just a tad bit where I organized the product into individual cards and ordered them 4 in a row. 

***New Libraries used:
- OpenAI - AI Generated Product Image
- Faker.js - Fake seeders 
- Swiper.js - Image Carousel


<h2>Additional Goals:</h2>

- Product Detail Page 
This will allow users to look at the product and add it to their cart. Separate component.

- Shopping Cart Page
Need a page where all of the items listed in the shopping cart are shown. Need to work on the backend for that and then test via Postman. Will need to be a Separate component.

- Search Bar feature
I want the user to be able to look through the search bar to find a specific product that they want to look for. I won't need a library or package for that, I remember making a function that allows me to look through an array of products, and do some checks to see if it looks closely to the input that was put into the search bar. This will require a product list page for all of the findings close to the keyword. 
Will need to be a Separate Component. 

- Pagination
Every good eCommerce website has pagination in it. Being able to paginate allows for more room for other visual eye-catchers. 

- Basic CSS Styling for Home Page
I just need it to look relatively pretty. Something that you'd be able to see straight out of a modern eCommerce page. Basic styling needed. maybe bootstrap>?


<h2> Completed: </h2>

- AI Generated Product Image (Completed)
I wanted the idea of trying to create an AI generated image based on the title for the faker.js seeds. This is because faker.js provides incredibly
random images. That way, the images are somewhat close to the product titles provided in faker.js. There are some issues with OpenAI 
and the cost of generating those images. They generate fine, but the cost is somewhat difficult to work around. I keep getting certain billing errors
from OpenAI, but that's relatively easy to fix as long as I can the $$$ to pay. Which I don't since I'm looking for a job. 

- Image Carousel on intro-banner (Completed)
It would be cool to see an image carousel. It can be done without any packages / libraries, but not sure how to proceed. 
Separate Component. Will utilize swiper.js library for this. 
- Added basic Image carousel with Swiper.js. One thing to consider is not utilizing too many different libraries in a project as that could take up
a lot of space. Instead, think of utilizing one over-arching library such as Bootstrap which houses many different tools. 

