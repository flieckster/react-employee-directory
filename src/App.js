import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './People';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employeenames, setNames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
      .then(res => {
        setNames(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filterPeople = employeenames.filter(people =>
    people.first.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="App">
      <div className="search">
        <h1 className="text">Employee Directory</h1>
        <input type="text" placeholder="search by name" className="input" onChange={handleChange} />
      </div>
      {filterPeople.map(people => {
        return (
          <People
           first={people.first} last={people.last} email={people.email} address={people.address} />
        )
      })}
    </div>
  );
}

export default App;
