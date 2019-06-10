import React from "react"

import "./content.scss"

import Welcome from "./welcome.js"
import Title from "./title.js"
import AboutMe from "./about-me.js"

function Content(props) {

	const {drawings, data} = props;

	const paty = data.users[0]

	return(	

		<section className="Content" >

			<Welcome />

			<Title

				text="Como te puedo ayudar"
			/>

			<AboutMe data={props.data}/>

		    <Title

				text="Vamos a hablar"
			/>

			{props.children}
			
		</section>
	)
}

export default Content;

