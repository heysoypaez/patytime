import React, { Component } from 'react';
import './App.css';

import Page  from "./page/containers/page-container.js";
import HomePage from "./page/pages/components/home-page.js"
import Artworks from "./articles/components/artworks/containers/artworks-container.js"


//React Router
import { BrowserRouter as Router , Route, Switch, Link } from "react-router-dom";


function Home(props) {
      
    return (

      <div className="App">
        
          <HomePage data={props.data} />
     
      </div>
    );
 }

 const ArtworksPage = (props) => (
          <Page>
             <Artworks />
          </Page>
    )
 


function App() {
  return (
    <Router>
      <div>
 
        <Route path="/" exact component={Home} />
        <Route path="/artworks/" component={ArtworksPage} />
      </div>
    </Router>
  );
}


export default App;
