### SEBR 0116

<img src="lisaralph.jpg">

## React Review Lab

Before we break into our Front End Hackathon, lets do a bit of review in React. Our goal is going to be mapping through all 50 US States, and making dynamic routes for each of them to click on to learn more about them

## Set Up

- Create a new React App using Vite, and then in an src/components touch a Header, Main, StateList, and StateDetails component.
- Install and set up your React Router
- Nest Header and Main into your App
- Bring your states.js file into your SRC folder and import your data into app, passing the State data into your child componenets
- Inside of main, nest two routes, an Index/List route, and a dynamic Show/Detiails route that renders all states by their ID, and shows more information

## Requirements
- 50 States mapped into a list/index route, with each state clickable to navigate to a show/details route that shows more information about the state from the JSON file
- Use the React Router to create a dynamic route that will work for all 50 states
- Each detail page should Map through the bordering states. How do we want to do this?
- Where will UseEffect, UseState, UseParams, and UseNavigate be needed through your app?
