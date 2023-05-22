import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
// import Blog from './components/Blog';
// import HoundoomTyphlosionBlog from './components/blogposts/HoundoomTyphlosionBlog';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        {/* <Route path="blog" element={<Blog />} />
        <Route path="blog/houndoom-typhlosion" element={<HoundoomTyphlosionBlog/>} /> */}
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
