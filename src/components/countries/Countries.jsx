import { use } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  //   const countriesData = use(countriesPromise)
  //const { countries } = countriesData
  const { countries } = use(countriesPromise);
  return (
    <>
      <div>
        <h2>Number of Countries: {countries.length}</h2>
        <div className="countries">
          {countries.map((country) => (
            <Country country={country} key={country.ccn3.ccn3} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
