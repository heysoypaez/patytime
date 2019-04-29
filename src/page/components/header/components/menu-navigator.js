import React from "react";
import "./menu-navigator.scss"
import {BrowserRouter as Router, Link} from "react-router-dom"

function MenuNavigator(props) {

	return(
		<nav className="MenuNavigator">
			<Link to="/" className="MenuNavigator-item"> 😍 My Home </Link>
			<Link to="/artworks" className="MenuNavigator-item"> 🎨 Paty`s Art </Link>
			<a className="MenuNavigator-item" href="patytime.me">🙎‍♀ Vamos a Hablar</a>
			<a className="MenuNavigator-item" href="patytime.me">🙅‍♀ About MEEE</a>
			<a className="MenuNavigator-item" href="patytime.me">👊 I wanna help you</a>
		</nav>
	)
}

export default MenuNavigator;