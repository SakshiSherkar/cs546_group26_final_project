# CS 546 Web Programming I Final Project: House Rental Application

A house rental application designed specifically for International Students living in the USA who are hunting for a house.
Built using HTML, CSS, Express, Node.js and MongoDB.

## Note

Please make sure to manually close the connection as the "await closeConnection()" function in the seed.js file is not included. This is because it's being closed before creating our properties and users. Since many functions are asynchronous, closeConnection() gets executed prematurely. (Thanks to the TAs suggestion).

We haven't added limited the number of comments to the users like instagram, facebook as this is the only mode of communication between user and owner

## Some meanings in the project:

    propertyType : This is either 'shared' or 'private'. This gives us if we have to share the room with another person.
    accomodationType: This is either 'permanent' or 'temporary'. Say, I am coming for an internship from Illinois unisersity to NJ for my internship in NYC. I want to stay for 1 or 2 months which is temporary. If I'm coming to stevens to start my masters from India, I will search for permanent accomodation.

## Deviation points from Project Proposal, DB Proposal for Functionalities.

Project Proposal:

1. Landing Page:
   We didn't implemented filters in this page. We felt that it is more appropriate if we implement this in "Property Listings Page"(SearchResults Handlebar).
2. House detail Page:
   We have included only owner's name in the details page but not the email Id to protect user data privacy. Owners or tenants can share their email ID in the comment section.
3. Add Property Page:
   We have implemented "owners can edit or remove the property" in the user profile page for appropriate functionality.

DB Proposal:

1. User Collection:
   We didn't included "userType:owner" in this collection since we are have the ownerFullName in the Properties Collection.
2. Properties Collection:
   i) We have included "ownerFullName" variable since we mentioned in the project proposal that owner name will be displayed in the property details page.
   ii) We have included "nearestLandmarks" variable with maximum length of 1000 since we mentioned in the project proposal that nearest landmarks will be displayed in the property details page.
   Comments Subdocument:
   i) We have introduced a new field called "commenterFullName" to let users know who commented the respective comment.

## How to Setup

Run 'npm install' to install the required dependencies for our project.  
Then run 'npm run seed' to run the task of seeding the database.
Then run 'npm start' to start the application.

## How the Application Works

- Upon loading the website, the first page will be the landing page.
- A non-authenticated user will be able to view the list of houses and the individual page of a house.
- Only a logged in, or authenicated, user will be able to favorite, comment and add property.
- In addition, an authenticated user will be able to view their own profile which includes information about their account, favorited houses, and houses they posted.

## Extra Features

- Showing sponsored property ads on homepage on random basis.
- Only authenticated users can download the lease pdf from respective property detail page.

## API Keys

This web application integrates the Google Maps Javascript API. In order to run the application properly, request API key from the Google Clouds platform. Then insert the key into the appropriate variables in the 'public/views/property.handlebars' and 'public/js/property.js'.

## GitHub Link

- https://github.com/SakshiSherkar/cs546_group26_final_project
