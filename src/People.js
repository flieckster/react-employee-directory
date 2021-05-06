import React from 'react'
import './people.css';

const People = ({ first, last, email, address }) => {
  return (
    <div className="contianer">
      <div className="row">
        <p class="col-sm" className="first">First Name: {first} </p>
        <p class="col-sm" className="last">Last Name: {last} </p>
        <p class="col-sm" className="email">Email: {email} </p>
        <p class="col-sm" className="address">Address: {address} </p>
      </div>
    </div>

  )
}

export default People
