import React from "react";

import Page from "../../containers/page-container.js"

import "./content/content.scss" //OJO

import Welcome from "./content/welcome.js"
import Title from "./content/title.js"
import AboutMe from "./content/about-me.js"

import Artworks from "../../../articles/components/artworks/containers/artworks-container.js";


function HomePage(props) {

	return(

		<Page > 
		<section className="Home">

				<Welcome />

				<Title

					text="Como te puedo ayudar"
				/>

				<AboutMe data={props.data}/>

				<Artworks 
					data={props.data}
					limit={3}
				/>

			    <Title

					text="Vamos a hablar"
				/>


		</section>
		</Page>
	)
}

export default HomePage;


