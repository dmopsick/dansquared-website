import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import AboutUs from './components/AboutUs';
// import Blog from './components/Blog';

export default function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<AboutUs />} />
      {/* <Route path="blog" element={<Blog />} /> */}
      <Route path="*" element={<NoMatch />} />
    </Routes>

  );
}
