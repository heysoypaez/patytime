import React, {Component} from "react";

import data from "../../../api.json";
import HomePage from "../components/home-page.js";

class HomePageContainer extends Component {

	state = {

		data: data
	}

	render() {

		return(

		  <HomePage 
		  	data={this.state.data}
		  />
		)
	}
}

export default HomePageContainer;