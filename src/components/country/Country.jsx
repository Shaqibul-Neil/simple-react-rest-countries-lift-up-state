import "./Country.css";
import CountryDetails from "../country-details/CountryDetails";

const Country = ({ country }) => {
  console.log(country.ccn3.ccn3);
  const {
    name: { common, official },
    capital: {
      capital: [capital],
    },
    flags: { flags },
    languages: { languages },
  } = country;

  const languagesList = Object.values(languages);

  const countryInfos = [
    { label: "Official", value: official },
    { label: "Capital", value: capital },
    { label: "Languages", value: languagesList.join(", ") },
  ];

  return (
    <div className="country">
      <div className="country-img">
        <img src={flags.png} alt={flags.alt} className="img" />
      </div>
      <h2 className="title">{common}</h2>
      <div className="country-details">
        <div className="details">
          {countryInfos.map((countryInfo) => (
            <CountryDetails countryInfo={countryInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
