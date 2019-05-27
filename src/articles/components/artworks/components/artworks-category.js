import React from "react";
import "./artworks-category.scss";

function ArtworksCategory(props) {
	// body...



	const showKey = (index) => {

		let box = []

		for(let key in props.data.artworks.categories) {
			box.push(key);
		}

		return box[index]
	}


	return(

	     <section className="Artworks-Categories">

	
	   <article 

	   		className="Artworks-Category"
		 >
	   		<h2>{showKey(0)}</h2>
	   </article>

	   	<article 
	   		className="Artworks-Category" 
		 >
	   		<h2>{showKey(1)}</h2>
	   </article>

	   </section>

	)
}

export default ArtworksCategory;

// props.title = showKeys



/*
Quiero una pagina donde salga las categorias de las artes de Paty, con un "card" clicable


Esa pagina va a ser la página de Artworks

Quiero que cuando hagas click te lleve a una subpagina con todo el arte de la categoria seleccionada

Quiero hacer esto en base al archivo JSON




	   		<Link 
	   			to={`artworks/${props.category}`} 
	   		> 
	   			<h2>props.title</h2>

	   		</Link>

*/