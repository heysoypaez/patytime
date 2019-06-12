import React from "react";
import "./artworks-categories.scss";

function ArtworksCategories(props) {

	const showKey = (index, object) => {

		let list = []

		for(let key in object) {
			list.push(key);
		}

		return list[index]
	}

	const categoriesList =	() => {
		
		const { categories } = props.data.artworks		
		let $categories = [];
		let index = 0

		// eslint-disable-next-line
		for (const category in categories ) {

			const categoryName = showKey(index, categories);


			$categories.push(

			  <article
			   className="Artworks-category" 
			   key={index} 
			   onClick={props.onClick}
			   data-category={ categoryName }
			  >

			 	 	<h2 data-category={categoryName} >{ categoryName }</h2>
				 
	  		</article>
			)
			index++

		}
		
		return $categories
	}

	return(

		 <section className="Artworks-categories">
		  	
		 {	categoriesList() }
	
		 </section>
		)
}

export default ArtworksCategories;
