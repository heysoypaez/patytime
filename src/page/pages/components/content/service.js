import React from "react";
import Title from "./title.js"

const Service = (props) => {
	
	return(
		<article className="Service" key={props.id}>
	       		<figure>
			       <img src={props.src} />       			
	       		</figure>
						<h1>{props.title} </h1>	
				<Title 
					text="Conoce más"
				/>

       	</article>
	)
}

export default Service;