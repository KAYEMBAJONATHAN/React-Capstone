import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { fName } = useParams();

  const { countryData } = useSelector((state) => state.country);
  const selectedCountry = countryData.find((item) => item.name === fName);

  return (
    <>
      <div className="details-container">
        <div className="image-container">
          <h1 className="heading-text">{selectedCountry?.name || 'none'}</h1>
        </div>
        <div className="status-bar">
          <h2 className="country-status">City/Town BreakDown - 2023</h2>
        </div>
        <h2 className="item-info">
          <span>Name:</span>
          {selectedCountry?.name || 'none'}
        </h2>
        <h2 className="item-info">
          <span>Capital:</span>
          {selectedCountry?.capital || 'none'}
        </h2>
        <h2 className="item-info">
          <span>Continent:</span>
          {selectedCountry?.continent || 'none'}
        </h2>
        <h2 className="item-info">
          <span>Population:</span>
          {selectedCountry?.population || 'none'}
        </h2>
        <h2 className="item-info">
          <span>Area:</span>
          {selectedCountry?.area ? `${selectedCountry.area} km²` : 'none'}
        </h2>
        {selectedCountry?.map && (
          <h2 className="item-info">
            <a href={selectedCountry.map}>Map</a>
          </h2>
        )}
      </div>
    </>
  );
};

export default Details;
