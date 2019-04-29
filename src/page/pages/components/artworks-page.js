import React from "react";

import Page from "../../containers/page-container.js"

import Artworks from "../../../articles/components/artworks/containers/artworks-container.js";


function  ArtworksPage(props) {


	return(

	   <Page>
	   	<Artworks
	   		data={props.data}
	   	/>
	   </Page>
	)
}

export default ArtworksPage