import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import AboutGSP from './components/AboutGSP';
import Hours from './components/Hours';
import Programming from './components/Programming';
import Danyell from './components/easteregg/Danny';
import ContactUs from './components/ContactUs';
import Athletes from './components/Athletes';
import Adults from './components/Adults';
// import Pricing from './components/Pricing';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="topsecret/epic/danny" element={<Danyell />} />
        <Route path="about" element={<AboutGSP />} />
        <Route path="hours" element={<Hours />} />
        {/* <Route path="pricing" element={<Pricing />} /> */}
        <Route path="programming" element={<Programming />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="athletes" element={<Athletes />} />
        <Route path="adults" element={<Adults />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
