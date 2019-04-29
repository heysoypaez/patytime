import React from "react";

import Page from "../../containers/page-container.js"

import "./content/content.scss" //OJO

//Components
import Welcome from "./content/welcome.js"
import Title from "./content/title.js"
import AboutMe from "./content/about-me.js"
import Contact from "./content/contact.js"
import Artworks from "../../../articles/components/artworks/containers/artworks-container.js";
import Services from "./content/services.js"


function HomePage(props) {

	const {data} = props;
	const Paty = data.users[0];

	return(

		<Page > 
		<section className="Home">

				<Welcome />

				<Services data={data} />

				<AboutMe data={data}/>

				<Artworks 
					data={data}
					limit={3}
				/>

				<Contact
					whatsappImage={data.external.images.whatsapp}
					gmailImage={data.external.images.gmail}
					email={Paty.email}
					phone={Paty.phone}
				/>


		</section>
		</Page>
	)
}

export default HomePage;


	