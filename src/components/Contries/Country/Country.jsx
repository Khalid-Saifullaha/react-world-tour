import { useState } from 'react';
import './Country.css'

const Country = ({country, handelVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handelVisited = ()=>{
        setVisited(!visited);
    }
    

    
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>{cca3}</small></p>
            <button onClick={() =>handelVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={handelVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;