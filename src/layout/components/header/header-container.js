import React, {Component} from "react"
import Header from "./components/header.js"
import MenuNavigator from "./components/menu-navigator.js"

import Modal from "../../../base/modal/containers/modal-container.js"


class HeaderContainer extends Component {

	state = {
		modalVisible: false
	}

	handleOnClickMenuHamburger = event => {

		this.setState({
			modalVisible: !this.state.modalVisible
		})
	}

	handleOpenModal = (event) => {
		
		this.setState({
			modalVisible: true,
		})		
	}

	handleCloseModal = (event) => {

		this.setState({
			modalVisible: false,
		})
	}


	render() {

		return(

			<header>

			<Header 
				handleOnClickMenuHamburger = {this.handleOnClickMenuHamburger}
			/>

			{
					this.state.modalVisible &&
					<Modal
						handleClose={this.handleCloseModal}
					>
							<MenuNavigator />
					</Modal> 			
					
				}

			</header>

		)
	}
}


export default HeaderContainer