import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';

const Home = () => {
  const { countryData } = useSelector(({ country }) => country);

  const [searchCountry, setSearchCountry] = useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchCountry(searchValue);
  };

  const filteredData = countryData
    .filter((item) => item.name.toLowerCase().includes(searchCountry));

  return (
    <>
      <Navigation />
      <div className="banner">
        <h1>World Statistics</h1>
      </div>
      <input
        type="text"
        value={searchCountry}
        onChange={handleSearch}
        placeholder="&#x1F50D; Search Country Here"
        className="search-input"
      />
      <div className="status-bar">
        <h2 className="country-status">Stats by Country</h2>
      </div>
      <div className="container">
        {filteredData.map((item) => (
          <Link to={`/countries/${item.name}`} key={`${item.name}${item.population}`} className="small-container">
            <div className="country-info">
              <h2 className="country-name">{item.name}</h2>
              <h2 className="country-population">{item.population}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
