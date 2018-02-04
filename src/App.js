import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile'
import Button from './components/Button'

class App extends Component {
  state = {
    user: {
      firstName: "Bruce",
      lastName: "Springsteen",
      profileImageURL: "https://randomuser.me/api/portraits/men/79.jpg"
    },
    editMode: false
  };

  // Method to handle firstname change
  // The 'event' provides context and data
  handleChangeFirstName = (event) => {
    // Get the <input> {HTMLInputElement}
    const input = event.target
    // Get the current text from the field
    const newFirstName = input.value
    // Because we're working with the user property, we're going to either mutate it or create a copy of it, we're going to give setState a function that returns and object
    // Pass this.setState a function which returns and object:
    // Pass it the previous state and then return the key-value pairs that we want to update in the state
    this.setState((prevState) => {
      const user = prevState.user
      // To mutate
      // user.firstName = newFirstName
      // Create a copy:
      const newUser = { ...user, firstName: newFirstName }
      // Tell the state to update it's user with the one that's just been changed
      // this.state.user will be updated
      return {
        user: newUser
      }
    })
  }

  handleChangeLastName = (event) => {
    const newLastName = event.target.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, lastName: newLastName }
      return {
        user: newUser
      }
    })
  }

  // We can pass the value directly to the method
  handleChangeProfileImageURL = (event) => {
    const newProfileImageURL = event.target.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, profileImageURL: newProfileImageURL }
      return {
        user: newUser
      }
    })
  }

  onToggleMode = () => {
    this.setState(prevState => {
      const editMode = prevState.editMode
      return {
        editMode: !editMode
      }
    })
  }

  getRandomProfile = () => {
    const url = "https://randomuser.me/api"
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        const randomProfileImage = json.results[0].picture.large
        const randomFirstName = json.results[0].name.first
        const randomLastName = json.results[0].name.last
        this.setState(prevState => {
          const user = prevState.user
          user.profileImageURL = randomProfileImage
          user.firstName = randomFirstName
          user.lastName = randomLastName
          return {
            user: user
          }
        })
      })
  }

  render() {
    // Destructured state:
    const { user, editMode } = this.state
    const buttonTitle = editMode ? 'Show Profile' : 'Edit Profile'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Profile Editor</h1>
        </header>
        <br />
        <ShowProfile
        user={user}
        visible={!editMode}
        />
        <EditProfile
        user={ user }
        onChangeFirstName={ this.handleChangeFirstName }
        onChangeLastName={ this.handleChangeLastName }
        onChangeProfileImageUrl={ this.handleChangeProfileImageURL }
        visible={editMode}
        />

        {/* <img src={ user.profileImageURL } alt="user" />
        <p className="App-intro">Name: { user.firstName } { user.lastName }</p>
        <label>First name:
        <input 
        value={ user.firstName } 
        onChange={
          // When user types in text field, this function executes
          // it's expecting a function that accepts one argument(event)
          this.handleChangeFirstName
        }
        />
        </label>
        <label>Last name:
        <input 
        value={ user.lastName } 
        onChange= { this.handleChangeLastName }
        />
        </label>
        <br />
        <label>
          Image URL:{' '}
          <input
            type="text"
            value={ user.profileImageURL }
            onChange={ this.handleChangeProfileImageURL }
          />
        </label> */}
        <Button
        title={ buttonTitle }
        onButtonClick={ this.onToggleMode }
        />
        <Button
        title="Generate Random Profile"
        onButtonClick={ this.getRandomProfile }
        />
      </div>
      
    );
  }
}

export default App;
