import React, {Component} from "react";

import data from "../../../api.json";
import ArtworksPage from "../components/artworks-page.js";

class ArtworksPageContainer extends Component {

	state = {

		data: data,
		characters: null
	}

	componentDidMount() {

		this.fetchCharacters()

	}

	fetchCharacters = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character/")
		const data = await response.json();

		this.setState({
			characters: data
		})
	}

	showKey = () => {

		let box = []

		for(let key in this.state.data.artworks.categories) {
			box.push(key);
		}

		return console.log(box)
	
	}


	render() {

		console.log(this.state.characters)

		this.showKey()

		return(

		  <ArtworksPage 
		  	data={this.state.data}
		  />
		)
	}
}

export default ArtworksPageContainer;