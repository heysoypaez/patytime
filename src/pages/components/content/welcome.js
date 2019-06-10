import React from "react"
import "./welcome.scss"

const Welcome = (props) => (

	<section className="Welcome">

		<h1>Hello, Is Paty time my friend</h1>

		<img 
			src={`${process.env.PUBLIC_URL}/img/artwork/drawings/paty-family-artwork.jpg`}
			alt="paty family artwork"
		/>
		
	</section>
)

export default Welcome;