
import React from "react";
import "./header.scss";
import HamburgerMenu from "../../../../base/icons/components/children/hamburguer-menu.js"
import Glasses from "../../../../base/icons/components/children/glasses.js"

import {Link} from "react-router-dom";

const Header = (props) => (

		<header className="Header"> 

			<Link to="/" className="Header-col-1"  >
				<Glasses  size={70} color="black" /> 
			</Link>

			<Link to="/" className="Header-col-2 Header-news">
				<p className="Header-col-2"> Hi my name`s  Paty </p>
			</Link>


			<section className="Header-col-3" >
				<HamburgerMenu  size={50} color="black" onClick={props.handleOnClickMenuHamburger}/> 
			</section>
		</header>
)

export default Header;