import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LearnMorePage from './Pages/LearnMorePage'
import FavoritesPage from './Pages/FavoritesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/learnmore/:parkCode">
            <LearnMorePage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
