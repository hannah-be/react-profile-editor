import React from 'react'

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

const ShowProfile = ({
  user,
  visible
}) => {
  if (visible) {
    return (
      <div>
        <img src={ user.profileImageURL } alt='profile' />
        <h2>{ fullName(user.firstName, user.lastName)}</h2>
      </div>
    )
  } else {
    return null
  }
}

export default ShowProfile