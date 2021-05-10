import React from 'react'
import './people.css';

const People = (picture, first, last, email, address) => {
  return (
    <div className="container">
      <div className="row">
        <p className="col-sm picture">Profile Pic: {picture} </p>
        <p className="col-sm first">First Name: {first} </p>
        <p className="col-sm last">Last Name: {last} </p>
        <p className="col-sm email">Email: {email} </p>
        <p className="col-sm address">Address: {address} </p>
      </div>
    </div>

  )
}

export default People
