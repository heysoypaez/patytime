
import React from "react";
import "./about-me.scss";
import Title from "./title.js"



function AboutMe(props) {


	const { data } = props;

	const paty = data.users[0]

	
	return(

		<section className="About-Paty" >

			<Title
				text="Sobre Mi"
			/>

				<p> Hola, Yo soy Paty </p>

				<img src={paty.photo} />
		</section>
	)
}

export default AboutMe;


