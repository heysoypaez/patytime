import React from "react";

function ArtworksCategory(argument) {
	// body...



	showKey = () => {

		let box = []

		for(let key in this.state.data.artworks.categories) {
			box.push(key);
		}

		return console.log(box)
	}


	return(

	   /*
				data.artworks.categories
	   */
	   <article >
	   		


	   		<Link 
	   			to={`artworks/${props.category}`} 
	   			className="MenuNavigator-item"
	   		> 
	   			<h2>{props.title}</h2>

	   		</Link>

	   </article>

	)
}

export default ArtworksCategory;