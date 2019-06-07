import React, {Component} from "react";
import "./artworks-categories.scss";

import {BrowserRouter as Router, Link} from "react-router-dom"



class ArtworksCategories extends Component {

	state = {

	}

	showKey = (index, object) => {

		let list = []

		for(let key in object) {
			list.push(key);
		}

		return list[index]
	}

	categoriesList =	() => {
		
		const { categories } = this.props.data.artworks
		
		let $categories = [];
		let index = 0

		for (let category in categories ) {
			
			$categories.push(

			  <article className="Artworks-category" key={index} >
					<Link 
						to={`/artworks/${this.showKey(index, categories)}`}
						className="Link"
					> 
			 	 			<h2>{ this.showKey(index, categories) }</h2>
				 	</Link>
	  		</article>
			)
			index++
		}
		
		return $categories
	}

	render() {

		return(

		   <section className="Artworks-categories">
		  	
		  	{	this.categoriesList() }

		   </section>

		)
	}

}


export default ArtworksCategories;

// props.title = showKeys



/*
1.A Quiero una pagina donde salga las categorias de las artes de Paty
	1. Eso lo logro a traves de un componente con JSX en React
	2. Esa pagina va a ser la página de Artworks

	Quiero que las categorias se creen como una lista dinamicamente en base a las categorias en la API.json
	
1.B Quiero que cuando hagas click en una categoria te lleve a una subpagina con todo el arte de la categoria seleccionada
		1. Quiero hacer esto en base al archivo JSON
		2. Eso que quiero lo logro a traves de:
			1. Crear un metodo handleClick() en el componente categoria

			2. Crear una subpagina con los artworks filtrados por cada categoria 
				1. donde el filtro consistira en que la categoria clicada será la correspondiente a los que artworks que se desplegaran a partir del .json

			3. Enviar al usuario a la subpagina que corresponde a la categoria al hacer click
				1. Eso lo logro a traves de React Router
				2. Y quiza con state

1.C	Quiero que cada categoria luzca como un "card" clicable 
	1. Eso lo diseño a traves de CSS
		1. Reutiliza el diseño actual



	   		<Link 
	   			to={`artworks/${props.category}`} 
	   		> 
	   			<h2>props.title</h2>

	   		</Link>

*/