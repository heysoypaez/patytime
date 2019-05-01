import React from "react";
import "./services.scss"

import Title from "./title.js"
import Service from "./service.js"




function Services(props) {
	

	const  listServices = () => {
		
		const { services: servicesData } = props.data
		let $services = [];

		for (let service in servicesData ) {
			
			const {id, icon, title} = servicesData[service]

			$services.push(

		       	<Service 
		       		key={id}
		       		src={icon}
		       		title={title}
		       	/>
			)
		}

		return $services
	}

	return(

			<section> 

			   <Title text="Como te puedo ayudar" />

		       <section className="Services">
		       		{ listServices() }		      		
		       </section>

	       </section>
	 )
}

export default Services;