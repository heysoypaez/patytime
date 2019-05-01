import React from "react";
import "./modal.scss";

function Modal(props) {

	return(

		<section className="Modal">

	
		{props.children}
		<button className="Modal-close" onClick={props.handleClick}>X</button>
		</section>

	)


}

export default Modal;