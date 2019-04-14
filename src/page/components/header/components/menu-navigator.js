import React from "react";
import "./menu-navigator.scss"

function MenuNavigator(props) {

	return(
		<nav className="MenuNavigator">
			<a className="MenuNavigator-item" href="patytime.me">😍 My Home</a>
			<a className="MenuNavigator-item" href="patytime.me">🎨 Paty`s Art</a>
			<a className="MenuNavigator-item" href="patytime.me">🙎‍♀ Vamos a Hablar</a>
			<a className="MenuNavigator-item" href="patytime.me">🙅‍♀ About MEEE</a>
			<a className="MenuNavigator-item" href="patytime.me">👊 I wanna help you</a>
		</nav>
	)
}


export default MenuNavigator;