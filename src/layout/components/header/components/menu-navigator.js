import React from "react";
import "./menu-navigator.scss"
import {Link} from "react-router-dom"

function MenuNavigator(props) {

	return(
		<nav className="MenuNavigator">
		
			<Link
				 to="/" 
				 className="MenuNavigator-item"
			 >

				<span role="img" aria-label="In love">😍</span> My Home 
			</Link>


			<Link 
				to="/artworks" 
				className="MenuNavigator-item"
			> 
				<span role="img" aria-label="art painting">🎨</span> Paty`s Art 
			</Link>

			<Link
			 className="MenuNavigator-item" 
			 to="/" 
			>
			 <span role="img" aria-label="girl cross hands">🙎‍♀</span>  Vamos a Hablar
			</Link>

			<Link
			 className="MenuNavigator-item" 
			 to="/" 
			>
				<span role="img" aria-label="girl cross hands">🙅‍♀</span> About MEEE
			</Link>

			<Link 
				className="MenuNavigator-item" 
				to="/" 
			>
				<span role="img" aria-label="punch hand">🙅👊</span> I wanna help you
			</Link>

		</nav>

	)
}

export default MenuNavigator;