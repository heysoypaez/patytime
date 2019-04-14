import React, {Component} from "react";
import Content from "../components/content.js";
import Title from "../components/title.js"

class ContentContainer extends Component {

	render() {

		return(

			<div> 

				
				<Content/>
				<Title/>
				<Content/>
			</div>

		)

	} 

}

export default ContentContainer;