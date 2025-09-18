import { use } from "react";
import Country from "../country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
  //   const countriesData = use(countriesPromise)
  //const { countries } = countriesData
  const { countries } = use(countriesPromise);

  //creating state
  const [visitedCountries, setVisitedCountries] = useState([]);

  //event handler click
  //event handler click
  const handleVisitedCountries = (country) => {
    const countryName = country.name.common;
    //we need to create a new array and then push item in it because if we push in the same array it will not be updated in the dom
    const newVisitedCountries = [...visitedCountries];
    //if country name doesn't exist in the array
    if (!newVisitedCountries.includes(countryName))
      newVisitedCountries.push(countryName);
    //if exists then delete that country name
    else newVisitedCountries.pop(countryName);
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <div>
        <h2>Number of Countries: {countries.length}</h2>
        <h3>Number Of Visited Countries: {visitedCountries.length} </h3>
        <h3>Visited Countries: {visitedCountries.join(", ")} </h3>
        <div className="countries">
          {countries.map((country) => (
            <Country
              country={country}
              key={country.ccn3.ccn3}
              handleVisitedCountries={handleVisitedCountries}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
