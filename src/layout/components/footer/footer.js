import React from "react";

import MenuNavigator from "../header/components/menu-navigator.js"
import "./footer.scss";

function Footer(props) {

	return(

		<footer className="Footer">
			<MenuNavigator />
			{props.children}
		</footer>
	)
}

export default Footer;