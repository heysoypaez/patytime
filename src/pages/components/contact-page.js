import React from "react"
import Layout from "../../layout/page-container.js"
import Contact from "./content/contact.js"

import data from "../../api.json"

const ContactPage = (props)  =>(

	<Layout>
		Contact
		<Contact 
					whatsappImage={data.external.images.whatsapp}
					gmailImage={data.external.images.gmail}
					email={data.users[0].email}
					phone={data.users[0].phone}
		/>
	</Layout>
)


export default ContactPage