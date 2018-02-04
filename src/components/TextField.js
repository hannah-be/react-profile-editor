import React from 'react'

const TextField = ({ 
  value, 
  onTextChange 
}) => {
  return (
    <input
      type="text"
      value={ value }
      onChange={event => {
        onTextChange(event)
        // To pass the value directly 
        //onTextChange(event.target.value)
      }}
    />
  )
}

export default TextField