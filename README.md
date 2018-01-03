This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup
- yarn create react-app react-profile-editor - this creates the app and also runs yarn install
- yarn start to start the server locally.
- Remove default fill content from App.js and App.css
- Create components folder within the src directory
- Set initial state and get it to render using components

## Key steps
- Render out hard coded data
- Model your data
- Add state to your app
- Make render use app's state (replacing the hardcoded data from render)
- Handle events from interactive elements (onClick, onChange)
- Connect those to methods that update the app's state (this.setState)

## Models
### User
- first name
- last name
- profile image

## State
Turning data into HTML elements or turning user interaction back into data. 

## Notes
you don't have to use 'const' inside the app because declaring the variable without sets an instant variable - when you're within classes, you don't have to use const. 

## Challenges

1. Add editable last name field
2. Add editable image URL field
3. Make two ShowProfile and EditProfile components that renders the showing of the user’s info, and renders the fields for editing their info
4. Add toggle button to switch between either profile viewing and editing
5. (Advanced) Add a 'Random' button that uses fetch or axios to load random user information from https://randomuser.me/api/
6. (Advanced) Add prettier to automatically format code:
   - Add a yarn format script to run prettier on all code in the ./src directory
   - Add a prettier pre-commit hook
