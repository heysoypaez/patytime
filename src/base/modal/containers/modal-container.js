import React, {Component} from "react";
import {createPortal} from "react-dom";
import Modal from "../components/modal.js"

class ModalContainer extends Component {


	render() {

		const modalContainer = document.getElementById("modal-container");

		return createPortal(

			<Modal
				handleClose = {this.props.handleClose}
				className = {this.props.className}
			>
			{this.props.children}
			</Modal>,
			modalContainer

			)
	}
}

export default ModalContainer;

/*
Necesito retornar un portal

Para ello uso una funcion que me da React que se llama create Portal

createPortal(queVoyARenderizar, dondeLoHare)

Para leonidas this.props.children hace que cualquier componente le sea super reutilizable

Por que ?

El orden permite la implementacion, accion y reutilizacion
*/