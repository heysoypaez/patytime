import React from "react";
import "./menu-navigator.scss"
import {Link} from "react-router-dom"

const MenuNavigator = (props) => (
	
		<nav className="MenuNavigator">
		
			<Link to="/" className="MenuNavigator-item" >

				<span role="img" aria-label="In love">😍</span> My Home 
			</Link>

			<Link to="/artworks" className="MenuNavigator-item">

				<span role="img" aria-label="art painting">🎨</span> Paty`s Art 
			</Link>

			<Link className="MenuNavigator-item"  to="/aboutme" >

				<span role="img" aria-label="girl cross hands">🙅‍♀</span> About MEEE
			</Link>

			<Link	className="MenuNavigator-item"	to="/services" >

				<span role="img" aria-label="punch hand">🙅👊</span> I wanna help you
			</Link>

			<Link className="MenuNavigator-item" to="/contact" >

			 <span role="img" aria-label="girl cross hands">🙎‍♀</span>  Vamos a Hablar
			</Link>
		</nav>
)

export default MenuNavigator;