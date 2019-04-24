import React, {Component} from "react";
import Page from "../components/page.js";

import Header  from "../components/header/containers/header-container.js"
import Footer  from "../components/footer/containers/footer-container.js"


class PageContainer extends Component {

	state = {
		Header: true,
		Footer: true,
	}

	render() {


		return(

			<Page>

				 <Header />
					
				
				{this.props.children}

				<Footer />

			</Page>
		)
	}
}

export default PageContainer;
