import React, {Component} from "react";
import Content from "../components/content.js";

class ContentContainer extends Component {

	render() {

		return(

			<div> 
				<Content
				 drawings={this.props.data.artworks.categories.drawings}
				 data={this.props.data}

				 />
				{this.props.children}
			</div>
		)
	} 
}

export default ContentContainer;