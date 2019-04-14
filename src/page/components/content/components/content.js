import React from "react"

import ImgOufit from "./imagen-outfit-daniel-paez-tomar-nader.jpeg"

import "./content.scss"

function Content(props) {
	
	return(		

		<section className="Content">

			<article> 

				<h1> Este es mi arte! </h1>
				<img src={ImgOufit} />	
			</article>

			<article> 
				<h1> Este es mi arte! </h1>
				<img src={ImgOufit} />
			</article>

			<article> 
				<h1> Este es mi arte! </h1>
				<img src={ImgOufit} />	
			</article>

			<article> 

				<h1> Este es mi arte! </h1>
				<img src={ImgOufit} />	
			</article>

			<article> 
				<h1> Este es mi arte! </h1>
				<img src={ImgOufit} />
			</article>

			<article> 
				<h1> Este es mi arte! </h1>
				<img src={ImgOufit} />	
			</article>



			
			{props.children}

		</section>
	)
}

export default Content;

