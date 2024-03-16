import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
// import AboutUs from './components/AboutUs';

export default function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="about" element={<AboutUs />} /> */}
      <Route path="*" element={<NoMatch />} />
    </Routes>

  );
}
