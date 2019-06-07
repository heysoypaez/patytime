import React, {Component} from "react";

import data from "../../../api.json";
import ArtworksPage from "../components/artworks-page.js";

class ArtworksPageContainer extends Component {

	state = {

		data: data,
	}

	render() {

		return(

		  <ArtworksPage 
		  	data={this.state.data}
		  />
		)
	}
}

export default ArtworksPageContainer;