import React, { Component } from 'react';
import './App.css';

import HomePage from "./page/pages/containers/home-page-container.js"
import ArtworksPage from "./page/pages/containers/artworks-page-container.js"

//React Router
import { BrowserRouter as Router , Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
 
        <Route path="/"  exact component={HomePage} />
        <Route path="/artworks/" component={ArtworksPage} />
      </div>
    </Router>
  );
}


export default App;
