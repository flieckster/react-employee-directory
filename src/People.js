import React from 'react'
import './people.css';

const People = ({ first, last, email, address}) => {
  return (
    <div className="container">
      <div className="row">
          <p class="row-cols-1 border" className="first">{first}</p>
          <p class="row-cols-2 border" className="last">{last}</p>
          <p class="row-cols-2 border" className="email">{email}</p>
          <p class="row-cols-2 border" className="address">{address}</p>
        </div>
      </div>

  )
}

export default People
 