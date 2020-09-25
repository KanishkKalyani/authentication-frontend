import React, { Component } from "react";
import Layout from "./Layout";
import "../Styles/Home.css";
import { isAuth } from "./../utils/helpers";
import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	backButton = () => {
		this.props.history.push("/chat");
	};

	render() {
		return (
			<Layout>
				{isAuth() && (
					<abbr title="To Chat">
						<img
							src="https://img.icons8.com/fluent/90/000000/circled-right-2.png"
							className="to-projects-button"
							alt="Back Button"
							onClick={this.backButton}
						/>
					</abbr>
				)}
				<h1>WELCOME TO CHAT APPLICATION</h1>
			</Layout>
		);
	}
}

export default Home;
