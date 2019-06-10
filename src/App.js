import React from 'react';
import './App.css';

import HomePage from "./pages/containers/home-page-container.js"
import ArtworksPage from "./pages/containers/artworks-page-container.js"

//React Router
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
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
