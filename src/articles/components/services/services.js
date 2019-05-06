import React from "react";
import "./services.scss"

import Title from "../../../page//pages/components/content/title.js"



function Services(props) {
	
	return(

			<section> 

			   <Title text="Como te puedo ayudar" />

		       <section className="Services">
		       		{ props.listServices }		      		
		       </section>

	       </section>
	 )
}

export default Services;