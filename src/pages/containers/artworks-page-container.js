import React, {Component} from "react";

import data from "../../api.json";
import ArtworksPage from "../components/artworks-page.js";

class ArtworksPageContainer extends Component {

	constructor(props) {

		super(props);

		this.state = {
			
			data: data,
			category: null
		}
	}

	handleCategoriesClick = (event)=> {

		const { category } = event.target.dataset

		this.setState({
			category: [category]
		})
	} 	

	render() {

		return(

		  <ArtworksPage 
		  	data={this.state.data}
		  	category={this.state.category}
		  	onCategoriesClick={this.handleCategoriesClick}
		  />
		)
	}
}

export default ArtworksPageContainer;