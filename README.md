# SafeTravels

[Live Site](http://safe-travels-aa.herokuapp.com/#/login)

## Overview

SafeTravels is the platform for all SF natives and visitors to discover thriving establishments and popular spots during the Coronavirus Pandemic. Incorporating the latest press releases from Federal, State, and County authorities as well as community feedback, the site is constantly updated to provide its visitors with the best options during this time of social distancing and public health.

The landing page provides a map of the City, a browsing pane, and a scrollable feed of the latest updates either on COVID-19 research, trending locations, and highlighted businesses to make your next meal, stay, or activity that safest and most enjoyable as possible.

---

## Functionality & MVP

 * New account creation, login, and guest/demo login (User CRUD)
 * Main page consisting of Navigation Pane, map of San Francisco, and vertical scrolling Newsfeed
 * Navigation Pane contains options for filtering landing page map and providing indexes by category
 * Events and Establishments (Locations) have individual show pages with descriptions and service updates
 * Logged in users have the ability to comment on stored Locations
 * Hosting on Heroku
 * Production README

---

## Technologies

SafeTravels is built with the MERN stack (MongoDB, Express, React, and Node) with MongoDB, Express, and Node serving as the backend part and React + Redux as the frontend part of the app.

### Backend: Node, MongoDB, Express

* Node provides the environment to run JS code as well as provide asynchronicity for our app.
* MongoDB and Mongoose will be utilized to create and store our tables for users and products. 
* Express will define the routes and controllers for the frontend to utilize to retrieve information. 

### Frontend: React + Redux + Bootstrap + Google Maps API

* React will be responsible for rendering the components for our pages.
* Redux will be providing the data for our React Components.
* Bootstrap will streamline React's rendering process.
* Google Maps API will provide a graphical representation of events/establishments whose location is stored as lat/long in MongoDB.

---

## Group Members & Work Breakdown

### **Kelvin Liew - Frontend Lead**
### **Jason Park - Backend Lead**
### **Matthew Tolentin - Project Float**

---

## Phase Two Itinerary

### July 20 (4 hours)
* Research Bootstrap Library - **Kelvin**
* Research Google Maps API - **Jason**
* Initialize new Events and Establishments (locations) backends - **Matthew**

### July 21 (4 hours)
* Incorporate Lat/Long entries for all locations for Google Maps - **Jason**
* Enhance styling of existing assets though Bootstrap - **Kelvin**
* Begin locations show page - **Matthew**

### July 22 (4 hours)
* Further Google Maps / Backend optimizations - **Jason**
* Style locations show page - **Kelvin**
* Redesign landing page message board to news feed - **Matthew**

### July 23 (6 hours)
* Final Testing and Debugging - **Jason / Kelvin / Matthew**
* Production README.md - **Jason / Kelvin / Matthew**

### July 24 (3 hours)
* Final review - **Jason / Kelvin / Matthew**

---

## Phase One Itinerary

### July 6 (4+ hours)
* Create discussion board backend - **Jason / Matthew / Kelvin**
* Test board implementation / begin styling - **Kelvin**

### July 7 (4+ hours)
* Test product backend - **Jason / Matthew**
* Test discussion board posting / comments with appropriate styling - **Kelvin**

### July 8 (~8 hours)
* Incorporate and test user authentication - **Jason / Matthew**
* Begin Designing Landing Page incorporating discussion board - **Kelvin**
* Potential additional seeding - **Matthew**

### July 9 (~8 hours)
* Implement product discover feed backend - **Jason / Matthew**
* Continue Styling existing assets including landing page - **Matthew**
* Begin product index page styling - **Kelvin**

### July 10 (~6 hours)
* Include discover feed in product landing page - **Jason / Matthew**
* Finish product index page styling - **Matthew**
* Begin product show page styling - **Kelvin**

### July 11/12 (~6 hours total)
* Finalize product show page styling - **Matthew**
* Finish Testing and Debugging - **Kelvin / Jason / Matthew**
