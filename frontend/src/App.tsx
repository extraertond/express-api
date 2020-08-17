import React from 'react';
import { Route, Router } from "react-router-dom";
import './App.css';
import FrameworksList from './views/FrameworksList';
import TopNavbar from './components/navbar/Navbar';
import h from './utils/auxiliar/AuxiliarHistory';

function App() {
  return (
    <Router history={h}>
      <TopNavbar />
        <Route
          path="/frameworks"
          exact={true}
          component={FrameworksList}
        />      
  </Router>
  );
}

export default App;
