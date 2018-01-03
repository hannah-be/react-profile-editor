This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup
- yarn create react-app react-profile-editor - this creates the app and also runs yarn install
- yarn start to start the server locally.
- Remove default fill content from App.js and App.css
- Create components folder within the src directory

- Set initial state and get it to render using components

## Models
### User
- first name
- last name
- profile image

## Steps taken React App
- get the thing to render on the screen
- figure out the data you need to render it
- set up the state
- Make render use app's state (replacing the hardcoded data from render)
- handle events from interactive elements (onClick, onChange)
- Connect those to methods that update the app's state (this.setState)


## State
Turning data into HTML elements or turning user interaction back into data. 

## Notes
you don't have to use 'const' inside the app because declaring the variable without sets an instant variable - when you're within classes, you don't have to use const. 

## Challenges
1. Add a last name field
2. Add image URL field
3. Add toggle button to switch between profile viewing and editing
4. (Advanced) Add a 'random' button that uses `fetch` to load random user information from `https://randomuser.me/api` 