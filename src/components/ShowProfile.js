import React from 'react'

const toCapitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const fullName = (firstName, lastName) => {
  return `${toCapitalize(firstName)} ${toCapitalize(lastName)}`
}

const ShowProfile = ({
  user,
  visible
}) => {
  if (visible) {
    return (
      <div>
        <img src={ user.profileImageURL } alt='profile' />
      {!!user.profileImageURL &&
        <h2>{ fullName(user.firstName, user.lastName)}</h2>}
      </div>
    )
  } else {
    return null
  }
}

export default ShowProfile