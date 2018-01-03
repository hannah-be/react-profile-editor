import React from 'react'

const Button = ({
  title,
  onButtonClick
}) => (
  <button
    onClick={onButtonClick}
  >
    { title }
  </button>
)

export default Button