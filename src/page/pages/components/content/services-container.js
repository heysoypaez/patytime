import React, { Component } from 'react';
import Services from "./services.js";


 class ServicesContainer extends Component {
 	
	render() {
		return (
			<div>
				<Services data={this.props.data} />
			</div>
		);
	}
}

export default ServicesContainer;