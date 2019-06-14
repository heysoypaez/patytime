import React from "react";
import "./modal.scss";

function Modal(props) {

	return(

		<section className={`${props.className} Modal`}>

	
		{props.children}
		<button className="Modal-close" onClick={props.handleClose}>X</button>
		</section>

	)


}

export default Modal;