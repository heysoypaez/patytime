import React from "react";

import Page from "../../containers/page-container.js"

import Artworks from "../../../articles/components/artworks/containers/artworks-container.js";

import ArtworksCategory from "../../../articles/components/artworks/components/artworks-category.js";


function  ArtworksPage(props) {


	return(

	   <Page>


	   <ArtworksCategory 
	   data={props.data}
	   />
	   	<Artworks
	   		data={props.data}
	   	/>
	   </Page>
	)
}

export default ArtworksPage