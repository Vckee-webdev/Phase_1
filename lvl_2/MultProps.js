import React from 'react'

function MultProps(props) {
  return (
    <div>
        <h3>Name:{props.name}</h3>
        <p>Age:{props.age}</p>
        <p>City:{props.city}</p>
    </div>
  )
}

export default MultProps