import React, {Component} from "react";
import Artwork from "../components/artwork.js"
import Artworks from "../components/artworks.js"
import data from "../../../../api.json";


class ArtworksContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
		data: data,
		$artworks: [] ,
		$artworksLast: [],
		limit: this.props.limit,
		category: this.props.category
		}
	}

	filterArtworks = () => {

		/*Variables 
		Declaration && Assignement
		------------------------*/

		const {$artworks } = this.state;
		const { limit, category } = this.state;
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

			this.setState({
				$artworks: $artworksLimitted() 
			})
		}
	}

	componentWillMount = () => {
		this.filterArtworks()
	}

	componentDidUpdate = (prevProps, prevState)  => {

		if(prevProps !== this.props){

				const updateArtworks = async() => {

					await	this.setState({
							category: this.props.category
					})

					this.filterArtworks()

					console.log("El componente se actualizo")
				}

				updateArtworks()
		}
	}

	render() {


		return( <Artworks>{this.state.$artworks}</Artworks> )
	}

}

export default ArtworksContainer;

