import React from "react"
import "./artworks.scss"

import Title from "../../../../pages/components/content/title.js"



function Artworks(props) {

	return(

		<section className="Artworks">

			<Title 
				text="Mis obras de arte"
			/>
				
			{props.children}
		</section>
	)
}

export default Artworks;