import React from "react"

import "./content.scss"

import Welcome from "./welcome.js"
import Title from "./title.js"

function Content(props) {

	const {drawings} = props;

	return(	



		<section>

			<Welcome />

			<Title
				text="Mis obras de arte"
			/>

			<section className="Content">

				<article> 
					<h1> {drawings[0].title} </h1>
					<img src={drawings[0].src} />
				</article>

				<article> 
					<h1> {drawings[1].title} </h1>
					<img src={drawings[1].src} />	
				</article>

				<article> 
					<h1> {drawings[2].title} </h1>
					<img src={drawings[2].src} />	
				</article>

				<article> 
					<h1> Este es mi arte! </h1>
					<img src="https://dibujosparacolorearde.net/wp-content/uploads/2018/08/Cute-dibujos-de-perros-KAWAII-para-onlinde-descargar-488x500.jpg" />
				</article>

				<article> 
					<h1> Este es mi arte! </h1>
					<img src="http://i0.wp.com/www.diarioviral.net/wp-content/uploads/2019/01/be63e9b68879dc7a7402e912723afa07.jpg" />	
				</article>

				<article> 
					<h1> Este es mi arte! </h1>
					<img src="https://pbs.twimg.com/profile_images/832731131342577665/PcGX1Qtj_400x400.jpg" />	
				</article>
			</section>

			<Title
				text="Como te puedo ayudar"
			/>

			<Title
				text="Sobre Mi"
			/>


			<Title
				text="Vamos a hablar"
			/>

			
		</section>
	)
}

export default Content;

