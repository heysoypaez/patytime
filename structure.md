RPM


Principles
1. A developer divides big problems in smaller problems
2. Visualize your Application like a Lego House
3. Your app have dumb components and smart components
4. Resolve the less times needed an specific problems
	4.1 Reuse


Don’t overthink it
If you’re just starting a project, don’t spend more than five minutes on choosing a file structure. Pick any of the above approaches (or come up with your own) and start writing code! You’ll likely want to rethink it anyway after you’ve written some real code.



I am creating right now a web application to share the best of my friend, Paty

Who is Paty?

She is a Crazy Party with legs


This projects is composed by

Component

The way i call a component is
- First letter in Cap
- Suffix -layout
- .js



Principle of my application architecture

1. Do something good enough and fast and later improve it
2. No More that 7 folders
3. No More than 4 levels

=======================
Architecture of the Application


Src
- Page
	-Components
		- page-layout.js
		- page-layout.css

		- Header
			-Components
			-Containers

		- Menu Navigator
			-Components
			-Containers

		- Content
			-Components
			-Containers

		- Footer
			-Components
			-Containers


	-Containers
		- page.js

	- Pages
		-Components
			- about-me-layout-page.js
			- contact-layout-page.js
			- services-layout-page.js
			- portfolio-layout-page.js
			- home-layout-page.js

		-Containers
			- about-me-page.js
			- contact-page.js
			- services-page.js
			- portfolio-page.js
			- home-page.js

- Widgets
	-Components
		-BirthdayCounter
		-panicButton
		-Challenge

	-Containers

- Errors
	-Components
	-Containers

- Base
	-Components

		- Button
		- Logo
		- Icon
		- Modal
		- Form

	-Containers

- APIhandlers

	-Components	
		- Instagram Posts
			-Components
			-Containers

		- Youtube Post 
			-Components
			-Containers

	-Containers

- Articles
	-Components
		- Services item
		- Services categories

		- Portfolio WorkArt Item
		- Portfolio WorkArt Categories

		- Posts
	-Containers








App {

	Pages: {

		- Home (Entry Page)

		- Paty Art (Art Portfolio)
			- Component Section (Portfolio Category)
				- Component Article (Portfolio Item)

		- #VamosAHablar (Contact Page)
			- Form Component

		- About Me
			- I am component
			- I care about component (values)
			- I do component
			- I am doing component
			- Funny fact compont

		- #IwannaHelpYou
			- Service Category
				-Service Component

	}

	Page: {
		
		- Header
		- Menu Navigator
		- Content
		- Footer


	}

	Widgets: {

		Widget: {}, [
			BirthdayCounter: {},
			panicButton: {},
			Challenge: {},
			]

	}

}

Base Components {
	-Button
	-Logo
	- Icon
	- Modal Component
	- Errors
}


Other Components {

	- Instagram Posts Component
	- Youtube Post Component
	- Native Post Component

}

LATER Components {
	
	Shop Component {
		Products Component
		Cart Component
	}

}