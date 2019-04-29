
import React from "react";
import "./contact.scss";

import Title from "./title.js"


function Contact(props) {
 	// body...



 	return(

 	   <div>
				
				
 	   	<Title text="Vamos a hablar" />
 	   
 	   <section className="Contact">

     	<h2> Dime Hola Paty y hagamos algo chevere </h2>
     	<small>(Mijo Son menos de 5 minutos)</small>

			<a href={`https://api.whatsapp.com/send?phone=${props.phone}&text=Hola%20Paty`} target="_blank">
				
				<figure>
					<img 
						src={props.whatsappImage} 
						width="90"
					/>
				</figure>
				<figcaption> 
					<p>Envia un WhatsApp</p>
				</figcaption>
			</a>

			<a href={`mailto:${props.email}?Subject=Hola%20Paty`} target="_blank">

				<figure>
					<img 
						src={props.gmailImage}
						width="90" 
					/>
				</figure>
				<figcaption> 
					<p>Envia Correo </p>
				</figcaption>
			</a>

 	   </section>
 	   </div>
 	)

 } 

export default Contact;


/*
What is the specific image i want to contact Paty ?

I wanna a Whatsapp Contact
and a
Email Contact

"Hola Paty"

patriciaromerotello@gmail.com

<a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Send Mail</a>

*/