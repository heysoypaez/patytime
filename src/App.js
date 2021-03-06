import React from 'react';

import HomePage from "./pages/containers/home-page-container.js"
import ArtworksPage from "./pages/containers/artworks-page-container.js"

import ContactPage from "./pages/components/contact-page.js"
import AboutMePage from "./pages/components/about-me-page.js"
import ServicesPage from "./pages/components/services-page.js"

//React Router
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
 
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/artworks/" component={ArtworksPage} />

 	      <Route exact path="/contact/" component={ContactPage} />
        <Route exact path="/aboutme/" component={AboutMePage} />
        <Route exact path="/services/" component={ServicesPage} />

      </Switch>
    </BrowserRouter>
  );  
}

export default App;
