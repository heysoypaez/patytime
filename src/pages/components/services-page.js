import React from "react"
import Layout from "../../layout/page-container.js"
import Services from "../../articles/components/services/services-container.js"
import data from "../../api.json"


const ServicesPage = (argument) => (

	<Layout>
		Services
		<Services data={data} />		
	</Layout>

)


export default ServicesPage