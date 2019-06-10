import React, { Component } from 'react';
import './App.css';

import HomePage from "./page/pages/containers/home-page-container.js"
import ArtworksPage from "./page/pages/containers/artworks-page-container.js"

//React Router
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";

import data from "./api.json"


function App() {

  return (
    <Router>
      <Switch>
 
        <Route exact path="/"  component={HomePage} />
        
        <Route path="/artworks/" component={ArtworksPage} />
          <Route exact path="/artworks/drawings" component={ArtworksPage} />
  				<Route exact path="/artworks/dresses" component={ArtworksPage} />

      </Switch>
    </Router>
  );  
}

export default App;
