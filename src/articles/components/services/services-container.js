import React, { Component } from 'react';

import Services from "./services.js";
import Service from "./service.js"

import Modal from "../../../base/modal/containers/modal-container.js"



 class ServicesContainer extends Component {
 	
 	state = {
 		modalVisible: false
 	}

 	handleOnClickModal = () => {
 		
 		this.setState({
 			modalVisible: !this.state.modalVisible
 		})
 	}

	listServices() {
		
		const { services: servicesData } = this.props.data
		let $services = [];

		for (let service in servicesData ) {
			
			const {id, icon, title} = servicesData[service]

			$services.push(

		       	<Service 
		       		key={id}
		       		src={icon}
		       		title={title}
		       		handleOnClickModal = {this.handleOnClickModal}
		       	/>
			)
		}

		return $services
	}



	render() {

		const {draw} = this.props.data.services

		return (
			<div>

				<Services 
					data={this.props.data}
					listServices={this.listServices()}
				/>

			{
					this.state.modalVisible &&
					<Modal 
						handleClose = {this.handleOnClickModal}
					> 
						<h1>{ draw.title }</h1>
						<p>{ draw.description }</p>
						<figure>
							<img src={draw.image} width="130px" />
						</figure>
					</Modal>
		
				}

			</div>
		);
	}
}

export default ServicesContainer;