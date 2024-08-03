import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import ShinyHuntingLanding from './components/shinyhunting/ShinyHuntingLanding.js';
import DynamaxAdventureCalculator from './components/shinyhunting/DynamaxAdventureCalculator.js';

export default function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shinyhunting" element={<ShinyHuntingLanding />} />
      <Route path="/shinyhunting/dynamax-adventures-shiny-odds-calculator" element={<DynamaxAdventureCalculator />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>

  );
}
