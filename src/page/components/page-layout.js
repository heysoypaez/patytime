import React from "react";

import Header  from "./header/containers/header-container.js"
import Content  from "./content/containers/content-container.js"
import Footer  from "./footer/containers/footer-container.js"

import Artworks from "../../articles/components/artworks/containers/artworks-container.js";


function PageLayout(props) {


	return(	
		<div>
			<Header />

			<Content data={props.data}>

				<Artworks 
					data={props.data}
					limit={3}
				/>

			</Content>

			<Footer />
		</div>
	)
}


export default PageLayout;

