import "./CountryDetails.css";

const CountryDetails = ({ countryInfo }) => {
  console.log(countryInfo);
  const { label, value } = countryInfo;
  return (
    <div className="detail-item">
      <p className="details-title">{label}</p>
      <p className="dot">:</p>
      <p className="detail">{value}</p>
    </div>
  );
};

export default CountryDetails;
