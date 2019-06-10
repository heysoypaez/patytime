import React from "react";
import Title from "../../../pages/components/content/title.js"

const Service = (props) => {
	
	return(
		<article className="Service" key={props.id}>
	       		<figure>
			       <img src={props.src} alt={props.title} />       			
	       		</figure>
				

						<h1>{props.title} </h1>	

				<button onClick={props.handleOnClickModal}  > 
				
					<Title 
						text="Conoce máss"
					/>

				</button>
     </article>
	)
}

export default Service;