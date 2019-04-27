
import React from "react";


function Contact(props) {
 	// body...

 	return(
 	       <section>

						<a href="https://api.whatsapp.com/send?phone=17866249408&text=Hola%20Paty" target="_blank">
							<p>Send Whatsapp</p>

							<figure>
								<img 
									src="https://pbs.twimg.com/profile_images/1102644324775297024/SqyiYHRL_400x400.png" 
									width="90"
								/>
							</figure>
						</a>

						<a href="mailto:someone@example.com?Subject=Hello%20again" target="_blank">
							<p>Send Mail</p>

							<figure>
								<img 
									src="https://www.freepngimg.com/download/gmail/66541-logo-google-email-gmail-download-hq-png.png" 
									width="90" 
								/>
							</figure>
						</a>

 	       </section>
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