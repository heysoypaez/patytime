import React from "react";

import Header  from "./header/containers/header-container.js"
import Content  from "./content/containers/content-container.js"
import Footer  from "./footer/containers/footer-container.js"


function PageLayout(props) {


	return(
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	)
}


export default PageLayout;

