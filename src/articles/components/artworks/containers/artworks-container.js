import React, {Component} from "react";
import Artwork from "../components/artwork.js"
import Artworks from "../components/artworks.js"
import data from "../../../../api.json";


class ArtworksContainer extends Component {

	constructor(props) {
		super(props);

	}

	state = {
		data: data,
		$artworks: [] ,
		$artworksLast: []
	}

	componentWillMount = () => {

		/*Variables 
		Declaration && Assignement
		------------------------*/

		const {$artworks } = this.state;
		const { limit, category } = this.props;
		this.artworks = this.state.data.artworks.categories;
		
		for( let category in this.artworks) {


				// "$" means that it is an element to render
				this.state.$artworks.push(

					this.artworks[category].map(
				
						elem => (
							
							<Artwork
								title= {elem.title}
								src= {elem.src}
								description= {elem.description}
								key={elem.id}
							 />
						)
					)
				)
		}

		if(category) {
			
			const setCategory = async() => {

				await this.setState({
					$artworksLast: this.state.$artworks,
					$artworks: []
				})
			
				for(let i= 0; i < category.length; i++) {
						
					if(category[i] === "drawings") {
		
						const drawings = this.state.$artworksLast[0] ;

						this.setState({
							$artworks: [ ...this.state.$artworks , drawings ]
						})
					}

					if(category[i] === "dresses") {
					
						const dresses = this.state.$artworksLast[1] ;
									
						this.setState({
							$artworks: [...this.state.$artworks , dresses]
						})
					}

					return this.state.$artworks;

				}
			}

			setCategory();	
		}

		if(limit) {

			console.log(limit)


			const $artworksLimitted = ( ) => {

				let newArtlist = [];

				const filterArtworks = (item, index) => {
				 	return index < Math.round(limit/$artworks.length)
				 }

			const calcLengthSublists = (total, currentValue) => {

				return total + currentValue.length;
			}


				for(let artlist of $artworks ) {

					newArtlist.push( artlist.filter(filterArtworks) )

			/*

			Finalmente al terminar de pasar lista por lista si la cantidad de elementos totales en ambas listas es igual al limite entonces hemos terminado

			Sino y hay demas eliminaremos el que sobre en la primera lista
			
			Sino y faltam agregaremos el que falta a partir de la primera lista

			Y declararemos eso como el nuevo estado
			*/

				}

					if( newArtlist.reduce(calcLengthSublists, 0) > limit ) {
						//If is greater, do this
						console.log(
						 `Is bigger by ${newArtlist.reduce(calcLengthSublists, 0) - limit}`
						)

						 newArtlist[0].pop();
					}

				 if(newArtlist.reduce(calcLengthSublists,0) < limit) {
				 		console.log(
				 		 `Is smaller by ${limit - newArtlist.reduce(calcLengthSublists, 0)}`
				 		 //returns Ej: "Is smaller by 2"
				 		 )

				 		newArtlist[0].push(

				 		  $artworks[0][5],
				 		  $artworks[0][6],

				 		)
				 }

				return newArtlist

			}				

			/*
			¿Que quiero lograr?
			Quiero filtrar las listas que estan dentro de la lista artworks a traves del estado de react

			Para ello necesito acceder a las listas dentro del state artworks
			-
			Quiero que en total la cantidad mostrada sea la filtrada por el prop

			Pero tengo la siguiente situacion

			Mi state $artworks es una lista que a su vez contiene dos sublistas

			existara una manera de ver la longitud total de artworks sumando la longitud de sus sublistas y filtrar esa longitud total?
			
			Me interesa mantenerlo como listas independientes

			Hagamos el algoritmo

			Si el limite es 4 entonces recorre el array artes

			Y dentro del array artes recorreras cada lista que tiene por dentro

			En base a esa lista crearemos una nueva lista que sea menor a 4 elementos (el limite) entre la cantidad de listas de artes redondeado a entero

			Y asi pasaremos a la siguiente lista donde igualmente crearemos una nueva lista que sea menor a 4 elementos (el limite) entre la cantidad de listas de artes redondeado a entero

			Finalmente al terminar de pasar lista por lista si la cantidad de elementos totales en ambas listas es igual al limite entonces hemos terminado

			Y declararemos eso como el nuevo estado

			*/

			this.setState({
				$artworks: $artworksLimitted() 
			})
		}
	}

	render() {

		return( <Artworks>{this.state.$artworks}</Artworks> )
	}

}

export default ArtworksContainer;

/*
Cuaderno de Desarrollo
=======================

Quiero mostrar artworks por categorias especificas

-Si no le paso nada me pasara todas las categorias

-recuerda que mis artworks estan dentro de this.state.$artworks 
	
Funciona!

Pero tenemos un bug con la manera en que interactua con limit	

Lo que haré ahora será revisar para quitar números fijos y proceder a corregir ese conflicto en category y limit
*/	