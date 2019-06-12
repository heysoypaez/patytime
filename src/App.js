import React from 'react';

import HomePage from "./pages/containers/home-page-container.js"
import ArtworksPage from "./pages/containers/artworks-page-container.js"

//React Router
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
 
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/artworks/" component={ArtworksPage} />

      </Switch>
    </BrowserRouter>
  );  
}

export default App;
