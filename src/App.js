import React from 'react';
import './App.css';

import HomePage from "./pages/containers/home-page-container.js"
import ArtworksPage from "./pages/containers/artworks-page-container.js"

import ContactPage from "./pages/components/contact-page.js"
import AboutMePage from "./pages/components/about-me-page.js"
import ServicesPage from "./pages/components/services-page.js"

//React Router
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";



import data from "./api.json"

const MyContext = React.createContext();	

class Provider extends React.Component {
	state = {
		data: data
	}

	render(	) {
		return(
		   <MyContext.Provider value={{
		   	state:this.state
		   }}>
		   	{this.props.children}
		   </MyContext.Provider>
		)
	}
}

function App() {

  return (

    <Provider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
 
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/artworks/" component={ArtworksPage} />
 	      <Route exact path="/contact/" component={ContactPage} />
        <Route exact path="/aboutme/" component={AboutMePage} />
        <Route exact path="/services/" component={ServicesPage} />

      </Switch>
    </BrowserRouter>
    </Provider>
  );  
}

export default App;
