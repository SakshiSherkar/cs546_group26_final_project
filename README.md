# CS 546 Web Programming I Final Project: House Rental Application

A house rental application designed specifically for International Students living in the USA who are hunting for a house.
Built using HTML, CSS, Express, Node.js and MongoDB.

## How to Setup

Run 'npm install' to install the required dependencies for our project.  
Then run 'npm run seed' to run the task of seeding the database.

## How the Application Works

- Upon loading the website, the first page will be the landing page.
- A non-authenticated user will be able to view the list of houses and the individual page of a house.
- Only a logged in, or authenicated, user will be able to favorite, comment, like and add property.
- In addition, an authenticated user will be able to view their own profile which includes information about their account, favorited houses, and any comments they may have written.

## API Keys

This web application integrates the Google Maps Javascript API. In order to run the application properly, request API key from the Google Clouds platform. Then insert the key into the appropriate variables in the 'public/views/property.handlebars' and 'public/js/property.js'.

## GitHub Link

- https://github.com/SakshiSherkar/cs546_group26_final_project
