import React from "react";
import "./services.scss"

import Title from "./title.js"




function Services(props) {
	

	return(

				<section> 

				<Title

					text="Como te puedo ayudar"
				/>

	       <section className="Services">

					  <article>
     			
			       		<figure>
					       <img src={props.data.artworks.categories.drawings[1].src} />       			
			       		</figure>
								<h1>{props.data.services.draw.title} </h1>	
		       	</article>
		       
		       	<article>
     			
			       		<figure>
					       <img src={props.data.artworks.categories.drawings[1].src} />       			
			       		</figure>
								<h1>{props.data.services.draw.title} </h1>	
		       	</article>
	
					  <article>
     			
			       		<figure>
					       <img src={props.data.artworks.categories.drawings[1].src} />       			
			       		</figure>
								<h1>{props.data.services.draw.title} </h1>	
		       	</article>
	       		
	       </section>

	       </section>

	 )
}

export default Services;