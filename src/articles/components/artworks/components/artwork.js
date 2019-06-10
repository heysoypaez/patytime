import React from "react";
import "./artwork.scss"

import {Link} from "react-router-dom"

function Artwork(props) {
	
	return(

			<article className="Artwork"> 
					<h2> {props.title} </h2>
					<img src={props.src} alt={props.title} />
					<p>{props.description}</p>
					<Link className="Artwork-button" to="/artworks"> Conoceme mejor </Link>
			</article>
	)
}

export default Artwork;