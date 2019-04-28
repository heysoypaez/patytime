import React, {Component} from "react";
import Artwork from "../components/artwork.js"
import Artworks from "../components/artworks.js"
import data from "../../../../api.json";


class ArtworksContainer extends Component {

	constructor(props) {
		super(props);

	}

	state = {
		data: data,
	}


	render() {


		this.drawings = this.state.data.artworks.categories.drawings;

		const { limit } = this.props


		if(!limit) {

			this.$drawings = this.drawings.map(
			
				elem => (
					
					<Artwork
						title= {elem.title}
						src= {elem.src}
						description= {elem.description}
						key={elem.id}
					 />
				)
			)
		}

		else {

			this.drawingsLimitted = this.drawings.filter(

				(item, index ) => index < limit
			)

			this.$drawings = this.drawingsLimitted.map(
			
				elem => (
					
					<Artwork
						title= {elem.title}
						src= {elem.src}
						description= {elem.description}
						key={elem.id}
					 />
				)
			)
		}


		/*We will return an Artwork Component for
		each Artwork in the JSON API*/

		return ( 

			<Artworks>
				{this.$drawings}
			</Artworks>
		)
	}
}

export default ArtworksContainer;

