import React from 'react';
import { Route, Router } from "react-router-dom";
import './App.css';
import FrameworksList from './views/FrameworksList';
import History from './utils/auxiliar/HistoryAux';
import TopNavbar from './components/navbar/Navbar';

function App() {
  return (
    <Router history={History}>
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
