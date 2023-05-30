import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Style/home.css';
import backgroud from '../Assets/backround.e8e3d87f186997fd15d8.png';

const Home = () => {
  const { TheCountryData } = useSelector(({ country }) => country);

  const [searchCountry, setSearchCountry] = useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchCountry(searchValue);
  };

  const filteredData = TheCountryData
    .filter((item) => item.name.toLowerCase().includes(searchCountry));

  return (
    <>
      <div className="header">
        <img src={backgroud} alt="banner-img" className="contryImg " />
      </div>
      <input
        type="text"
        value={searchCountry}
        onChange={handleSearch}
        placeholder="&#x1F50D; Search Country Here"
        className="SearchCountry-Here"
      />
      <div className="status-bar">
        <h2 className="country-status">Stats by Country</h2>
      </div>
      <div className="content">
        {filteredData.map((item) => (
          <Link to={`/countries/${item.name}`} key={`${item.name}${item.population}`} className="container">
            <img src={item.flag} alt={item.name} className="mapOfThe-coutry" />
            <div className="info">
              <h2 className="name">{item.name}</h2>
              <h2 className="population">{item.population}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
