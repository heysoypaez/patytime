import React, { Component } from 'react';
import './App.css';

import Page  from "./page/containers/page-container.js";
import HomePage from "./page/pages/components/home-page.js"

/*
//React Router
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";

//Redux
import {Provider as ReduxProvider} from "react-redux";
import store from "./store";
*/


class App extends Component {
  render() {
    return (

		/*
    		<ReduxProvider store={store}>

    			<Router>

    				<Route exact path="/patytime" component={Page} />

    				<Route exact path="/patytime/aboutme" component={AboutMe} />
    			</Router>

    		</ReduxProvider>
		*/  		

      <div className="App">
        
        	<HomePage data={this.props.data} />
     
      </div>
    );
  }
}

export default App;
