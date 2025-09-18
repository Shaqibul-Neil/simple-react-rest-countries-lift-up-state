import "./Country.css";
import CountryDetails from "../country-details/CountryDetails";
import { useState } from "react";

const Country = ({
  country,
  handleVisitedCountries,
  handleVisitedCountriesFlag,
}) => {
  // console.log(handleVisitedCountries);
  //destructuring
  const {
    name: { common, official },
    capital: {
      capital: [capital],
    },
    flags: { flags },
    languages: { languages },
  } = country;
  const languagesList = Object.values(languages);

  //creating and array of object for component
  const countryInfos = [
    { label: "Official", value: official },
    { label: "Capital", value: capital },
    { label: "Languages", value: languagesList.join(", ") },
  ];

  //creating state
  const [isVisited, setVisited] = useState(false);

  //event handler click
  //event handler click
  const handleVisited = () => {
    setVisited(!isVisited);
    handleVisitedCountries(country); //getting the function from parent as prop
    handleVisitedCountriesFlag(country);
  };

  return (
    <div
      className="country"
      style={{
        backgroundColor: isVisited ? "#eff7f0ff" : "#faf0f0ff",
        transition: "all 0.7s ease",
      }}
    >
      <div className="country-details">
        <div className="country-img">
          <img src={flags.png} alt={flags.alt} className="img" />
        </div>
        <div className="visited-container">
          <h2 className="title">{common}</h2>
          <div className="visited-flag">
            {isVisited ? (
              <img src={flags.png} alt="" className="flag-img" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="details">
          {countryInfos.map((countryInfo) => (
            <CountryDetails countryInfo={countryInfo} key={Math.random() * 5} />
          ))}
        </div>
      </div>

      <div className="btn-wrapper">
        <button
          className="btn"
          style={{
            backgroundColor: isVisited ? "#133321" : "#691b1bff",
            width: isVisited ? "100%" : "240px",
            transition: "all 0.3s ease",
          }}
          onClick={handleVisited}
        >
          {isVisited ? "Visited 🥳" : "Not Visited 😥"}
        </button>
      </div>
    </div>
  );
};

export default Country;
