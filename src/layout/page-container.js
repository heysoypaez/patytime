import React, {Component} from "react";

import Header  from "./components/header/header-container.js"
import Footer  from "./components/footer/footer.js"


class PageContainer extends Component {

	state = {
		Header: true,
		Footer: true,
	}

	render() {

		return(

			<div className="Page">

				<Header />
									
				{this.props.children}

				<Footer />

			</div>
		)
	}
}

export default PageContainer;
