import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import FrameworksList from './views/Frameworks/FrameworksList';
import TopNavbar from './components/navbar/Navbar';
import CreateFramework from './views/Frameworks/CreateFramework';
import EditFramework from './views/Frameworks/EditFramework';
import About from './views/others/About';

function App() {
  return (
    <Router>
    <div>
      <TopNavbar />
      <Switch>

      <Route exact path="/">
          <About />
        </Route>

        <Route exact path="/frameworks">
          <FrameworksList />
        </Route>

        <Route exact path="/editar/:id">
          <EditFramework />
        </Route>

        <Route exact path="/agregar">
          <CreateFramework />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  </Router>
  
  );
}

export default App;
