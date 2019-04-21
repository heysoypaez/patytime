import React, {Component} from "react";
import Artwork from "../components/artwork.js"
import Artworks from "../components/artworks.js"


class ArtworksContainer extends Component {


	render() {

		this.drawings = this.props.data.artworks.categories.drawings

		/*We will return an Artwork Component for
		each Artwork in the JSON API*/

		return ( 

			<Artworks>

			{

			 this.drawings.map(
			
				elem => (
					
					<Artwork
						title= {elem.title}
						src= {elem.src}
						description= {elem.description}
						key={elem.id}
					 />
				)
			)}

			</Artworks>
		)
	}
}

export default ArtworksContainer;

