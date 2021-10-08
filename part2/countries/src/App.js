import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Countries } from './Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState({});
  const regex = new RegExp(search, 'ig')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
         .then(resp => {
           setCountries(resp.data)
         })
  }, [])

  useEffect(() => {
    const showCountry = {}
    countries.forEach(country => showCountry[country.name] = false)
    setShow(showCountry)
  }, [countries])


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleShow = (e) => {
    const showCountry = {...show};
    showCountry[e.target.name] = !showCountry[e.target.name]
    setShow(showCountry)
  }

  const countriesToShown = countries.filter(country => country.name.match(regex));

  return (
    <div >
      <label htmlFor="search">Find Countries</label>
      <input type="text" name="search" id="search" value={search} onChange={handleSearch}/>
      <Countries countries={countriesToShown} search={search} show={show} handleShow={handleShow}/>
    </div>
  );
}

export default App;
