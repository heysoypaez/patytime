import React, {Component} from "react";
import Page from "./components/page.js";

import Header  from "./components/header/header-container.js"
import Footer  from "./components/footer/footer.js"


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
