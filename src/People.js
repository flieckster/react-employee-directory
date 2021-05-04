import React from 'react'
import './people.css';

const People = ({ first, last, email, address}) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="data">
          <h5 className="first">{first}</h5>
          <h5 className="last">{last}</h5>
          <h5 className="email">{email}</h5>
          <h5 className="address">{address}</h5>
        </div>
      </div>
    </div>
  )
}

export default People
 