
import React from "react";
import "./header.scss"
import HamburgerMenu from "../../../../base/icons/components/children/hamburguer-menu.js"
import Glasses from "../../../../base/icons/components/children/glasses.js"

function Header(props) {
	

	return(

		<header className="Header"> 

			<section className="Header-col-1"  >
				<Glasses  size={70} color="black" /> 
			</section>

			<section className="Header-col-2 Header-news">
				<p className="Header-col-2"> Hi my name`s  Paty </p>
			</section>


			<section className="Header-col-3" >
				<HamburgerMenu  size={50} color="black" onClick={props.handleOnClickMenuHamburger}/> 
			</section>

		</header>
	)
}

export default Header;



/*
Mi header lo compondran tres elementos

el boton de menu que lo tratare como un menu de hamburguesa
El icono de Paty que redirigira a la home
Y un espacio en blanco para anuncios, datos, saludos, cosas ramdom


*/