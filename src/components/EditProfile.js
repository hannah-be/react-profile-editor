import React from 'react'
import TextField from './TextField'

const EditProfile = ({
  user,
  onChangeFirstName,
  onChangeLastName,
  onChangeProfileImageUrl,
  visible
}) => {
  if (visible) {
    return (
      <div>
        <label>
          First Name:
          <TextField
            value={ user.firstName }
            onTextChange={ onChangeFirstName }
          />
        </label>
        <br />
        <label>
          Last Name:
          <TextField
            value={ user.lastName }
            onTextChange={ onChangeLastName }
          />
        </label>
        <br />
        <label>
          Image URL:
          <TextField
            value={ user.profileImageURL }
            onTextChange={ onChangeProfileImageUrl }
          />
        </label>
      </div>
    )
  }
  else {
    return null
  }
}

export default EditProfile