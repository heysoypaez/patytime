import React, {Component} from "react";
import Artwork from "../components/artwork.js"
import Artworks from "../components/artworks.js"


class ArtworksContainer extends Component {

	constructor(props) {
		super(props);

	}


	render() {


		this.drawings = this.props.data.artworks.categories.drawings;

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

