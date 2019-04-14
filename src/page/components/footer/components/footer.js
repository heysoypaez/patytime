import React from "react";
import "./footer.scss";

function Footer(props) {

	return(

		<footer className="Footer">
			Hello
			{props.children}
		</footer>
	)
}

export default Footer;