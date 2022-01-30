import React from 'react';
import './style.css';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import your route components too
const Test = () => {
  return (
    <div>
      {' '}
      hello
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      ;
    </div>
  );
};
export default Test;
