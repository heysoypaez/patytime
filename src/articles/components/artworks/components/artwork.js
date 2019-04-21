import React from "react";
import "./artwork.scss"

function Artwork(props) {
	
	return(

			<article className="Artwork"> 
					<h2> {props.title} </h2>
					<img src={props.src} />
					<p>{props.description}</p>
					<a className="Artwork-button"> Conoceme mejor </a>
			</article>
	)
}

export default Artwork;