import React from "react"

import "./title.scss"

function Title(props) {
	
	return(		
		<header className="Title">
			<h1>{props.text}</h1>
		</header>
	)
}

export default Title;

