import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './Component/Home';
import { fetchCountryData } from './Redux/Country/countrySlice';
import Details from './Component/Details';
import Navigation from './Component/Navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigation />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/countries/:fName" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
