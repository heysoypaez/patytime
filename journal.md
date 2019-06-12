// Here i will put my path to the App i am creating 

Core Plan
----------

1. [X] I need a Header for navigate to other pages and give the welcome

2. I need The Content which will be consume by the user in the HomePage
	1. [X] I need a Welcome Component <Welcome />
	2. [ ] I need show who is paty, I mean a Powerful About Me Component <AboutMe />
	3. [X] I need show the Magic Paty creates, her artworks <Artworks />
		1. I need to show a Modal with the details of the Artwork

	4. [ X ] All this is okey, but i need to show what Paty can and want do for You <Services />
	5. [ ] People wanna see what happens today, now, I need her updated arts platforms <SocialNetworks />
	6. [X] Enough ? Yes but i wanna talk with her what can i do, i need show how people can contact her <Contact />


3. I need a footer to refocus the user to contact pages or help him visit secondary pages


Wednesday 24/04/19
===================

	What specific result i will get today in the App ?


	*Thoughts chaotics*


	I want to finish the home page

	What needs to happens in order to consider the home page finished ?


	What need to happens in order to consider 1.2 finished?

	*Action Plan*
	-------------

	1. [X] Contains the Home Page in the Page Component
	2. Specify the content for About Me


	*New Ideas*

	*What´s next?*


	[X] Next will go make the specific pages using React Router as i see



	*Disorder*
	---------

	Concentrate, deberia colocar los subcomponente dentro del dumb o dentro del inteligente
	El inteligente porque él es el contenedor


Sunday 28/04/19
===================

	*What i will do? Action Plan*
	----------------------------

	1. ! [X ] I will resolve the Components that needs props in the React Router Component
		1. [X] If there´s not i will create a Container
		2. [X] I will pass there the props i needs
		3. [X] I will pass there the data	

	1. 4. [ ] All this is okey, but i need to show what Paty can and want do for You <Services />

		1. [X] Create the component < Services />
		2. [X] Create the data structure in the API
		3. [] Specify the data´s content in the API
		4. [] Create the <Service /> Component
		5. [] Create an Impactful Design
		6. [] Connnect the specific data in the API with the Components (props && state) 


	What is for the next session?
	------------------------------


	Ideas Catching
	---------------


	Errors catching
	--------------

	Free thoughts
	------------------

		I know Paty can serve other people and that also she wants to do it

		She can do it draw

		For her draw is a way to communicate, to express something that need to be expressed

		She can help in the decoration of places like restaurants


		She can do it designing a Dresses for girls or for a brand


		She can sing

		She can animate people

		She is funny, she delight with her energy, she connects with bodys

		What is the Paty´s HADA ?

		She draw every day, she spent time in her art i loved art
		She makes me laugh, 
		She express her love
		She listen and make me express
		She takes action in important things
		She makes me experience the world through her eye
		She express love, energy in her things


		1. Comunicar más con Dibujos
		2. Diseñar TE vestuario

		Comunicar sin palabras

		A

		She is and smile living, una sonrisa que vive en su dia a dia

		D
		She have her own language, she say things with her touch "locote", "chamo" "mijo" "ay vaale"

		A
		Both are growingg
		Bot are making mistakes in this process
		Ella es una artistaa y yo soy un desarrollador etico

Tuesday 30/03/19
===================

	_I have created de Component Services_

	1. 4. [ ] But i need to show what Paty can and want do for You <Services />

		1. [X] Specify the data´s content in the API _(for now)_
			1. [x] icon

		2. [X] Create the <Service /> Component
		3. [] Create an Impactful Design
		4. [X] Connnect the specific data in the API with the Components (props && state) 
		5. [] Move this to the Container Services Component

		Ideas Catching
		---------------

			When she does click will popup a Modal with the exciting story about the service and a button to contact her

			The whatsapp button needs to have a props with the text



		Errors catching
		--------------

		Free thoughts
		------------------

Saturday 04/04/19
===================

	_I have created de Component Services_

	1. 4. [ ] But i need to show what Paty can and want do for You <Services />

		1. [X] Create an Impactful Design 
		2. [X] Move this to the Container Services Component

		Ideas Catching
		---------------

			When she does click will popup a Modal with the exciting story about the service and a button to contact her

			The whatsapp button needs to have a props with the text



		Errors catching
		--------------

		Free thoughts
		------------------


Sunday 05/04/19
===================

_I have created de Component Services_

1. 4. [ ] But i need to show what Paty can and want do for You <Services />

	Final. [X] Send _____ with a Loop calling the API 



	Ideas Catching
	---------------

	Errors catching
	--------------

	Free thoughts
	------------------


Sunday 05/04/19
===================

_I have created de Component Services_

1. 4. [ ] But i need to show what Paty can and want do for You <Services />

	Final. [X] Send _____ with a Loop calling the API 



	Ideas Catching
	---------------

	Errors catching
	--------------

	Free thoughts
	------------------

	Proximos pasos
	------------------

	Crear pagina para cada artwork dinamicamente
	enlazarlo con el componente de artwork category

Thursday 12/06/19
===================

/*
1.A Quiero una pagina donde salga las categorias de las artes de Paty
	1. Eso lo logro a traves de un componente con JSX en React
	2. Esa pagina va a ser la página de Artworks

	Quiero que las categorias se creen como una lista dinamicamente en base a las categorias en la API.json
	
1.B Quiero que cuando hagas click en una categoria te lleve a una subpagina con todo el arte de la categoria seleccionada
		1. Quiero hacer esto en base al archivo JSON
		2. Eso que quiero lo logro a traves de:
			1. Crear un metodo handleClick() en el componente categoria

			2. Crear una subpagina con los artworks filtrados por cada categoria 
				1. donde el filtro consistira en que la categoria clicada será la correspondiente a los que artworks que se desplegaran a partir del .json

			3. Enviar al usuario a la subpagina que corresponde a la categoria al hacer click
				1. Eso lo logro a traves de React Router
				2. Y quiza con state

1.C	Quiero que cada categoria luzca como un "card" clicable 
	1. Eso lo diseño a traves de CSS
		1. Reutiliza el diseño actual



	   		<Link 
	   			to={`artworks/${props.category}`} 
	   		> 
	   			<h2>props.title</h2>

	   		</Link>

*/



/*
Cuaderno de Desarrollo
=======================

Quiero mostrar artworks por categorias especificas

-Si no le paso nada me pasara todas las categorias

-recuerda que mis artworks estan dentro de this.state.$artworks 
	
Funciona!

Pero tenemos un bug con la manera en que interactua con limit	

Lo que haré ahora será revisar para quitar números fijos y proceder a corregir ese conflicto en category y limit


=======


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


