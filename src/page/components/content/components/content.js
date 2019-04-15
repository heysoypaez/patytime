import React from "react"

import ImgOufit from "./imagen-outfit-daniel-paez-tomar-nader.jpeg"

import "./content.scss"

function Content(props) {
	
	return(		

		<section className="Content">

			<article> 
				<h1> Este es mi arte! </h1>
				<img src="https://i.pinimg.com/236x/05/d4/86/05d48661bfd70be8b6336034a2768372.jpg" />
			</article>

			<article> 
				<h1> Este es mi arte! </h1>
				<img src="https://s3.amazonaws.com/tinycards/image/bced58f3a6e8438485e7f5ccb65e52c7" />	
			</article>

			<article> 

				<h1> Este es mi arte! </h1>
				<img src="https://www.dibujosfaciles.es/wp-content/uploads/2018/03/5cf4950dfb091e7c2ba1cca13654ff70.png" />	
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

			
			{props.children}

		</section>
	)
}

export default Content;

