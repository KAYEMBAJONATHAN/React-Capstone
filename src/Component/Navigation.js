import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import back from '../Assets/back.png';
import mic from '../Assets/mic.png';
import setting from '../Assets/setting.png';
import '../Style/navigation.css';

const Navigation = () => (
  <>
    <div className="country">
      <Link to="/"><img src={back} alt="back" /></Link>
      <h1>Countries</h1>
      <div>
        <img src={mic} alt="mic" />
        <img src={setting} alt="setting" />
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
