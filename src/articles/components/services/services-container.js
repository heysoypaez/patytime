import React, { Component } from 'react';

import Services from "./services.js";
import Service from "./service.js"

import Modal from "../../../base/modal/containers/modal-container.js"


class ServicesContainer extends Component {
 	
 	state = {
 		modalVisible: false,
 		serviceSelected: null
 	}

 	handleOnClickModal = (event, id) => {
		

 		this.setState({
 			modalVisible: !this.state.modalVisible,
 			serviceSelected: parseInt(id)
 		})
 	}


 	
	listServices = () => {
		
		const { services } = this.props.data
		let $services = [];

		for (let service in services ) {
			
			const {id, icon, title} = services[service]

			$services.push(

		       	<Service 
		       		key={id}
		       		src={icon}
		       		title={title}
		       		handleOnClickModal = { () => {
		       			this.handleOnClickModal(null, id)
		       		}}
		       	/>
			)
		}

		return $services
	}

	renderServiceSelected = () => {

		const { services: servicesData } = this.props.data;

		for( let service in servicesData) {

				const {id, image, title, description} = servicesData[service]

				if(id === this.state.serviceSelected) {

					return(

		       	<section key={id}>
			       	<h1>{ title }</h1>
							<p>{ description }</p>
							<figure>
								<img src={image} width="130px" alt={title} />
							</figure>
						</section>
					)
				}
			}

	
		/*Returns an object with the serviceSelected*/
	}

	render() {


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
						{this.renderServiceSelected()}
					</Modal>
		
				}

			</div>
		);
	}
}

export default ServicesContainer;