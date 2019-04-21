import React from "react"
import "./artworks.scss"

function Artworks(props) {
	// body...
	return(
		<section className="Artworks">
			{props.children}
		</section>
	)
}

export default Artworks;