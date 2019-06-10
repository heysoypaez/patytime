import React from "react";

import Page from "../../containers/page-container.js"

import Artworks from "../../../articles/components/artworks/containers/artworks-container.js";

import ArtworksCategories from "../../../articles/components/artworks/components/artworks-categories.js";




function  ArtworksPage(props) {


	return(

	   <Page>
		   <ArtworksCategories 
		   data={props.data}
		   />	

		   <Artworks 
		  	 category={ ["dresses"] }
		 		/>
	   </Page>
	)
}

export default ArtworksPage