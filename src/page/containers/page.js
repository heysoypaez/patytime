import React, {Component} from "react";
import PageLayout from "../components/page-layout.js";


class Page extends Component {

	render() {


		return(

			<PageLayout data={this.props.data} />
		)
	}
}

export default Page;
