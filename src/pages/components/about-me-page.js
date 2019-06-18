import React from "react"
import Layout from "../../layout/page-container.js"
import AboutMe from "./content/about-me.js"
import data from "../../api.json";

const AboutMePage = (props) => (

	<Layout>
		AboutMe
		<AboutMe data={data} />
	</Layout>
)

export default AboutMePage