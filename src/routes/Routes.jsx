import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./../Components/Home";
import SignUp from "./../Components/SignUp";
import SignIn from "./../Components/SignIn";
import ActivateAccount from "./../Components/ActivateAccount";
import ForgotPassword from "./../Components/ForgotPassword";
import ResetPassword from "./../Components/ResetPassword";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<PublicRoute path="/" exact component={Home} />
					<PublicRoute restricted path="/sign-up" exact component={SignUp} />
					<PublicRoute restricted path="/sign-in" exact component={SignIn} />
					<PublicRoute
						restricted
						path="/auth/activate/:token"
						exact
						component={ActivateAccount}
					/>
					<PublicRoute
						restricted
						path="/auth/password/forgot"
						exact
						component={ForgotPassword}
					/>
					<PublicRoute
						restricted
						path="/auth/password/reset/:token"
						exact
						component={ResetPassword}
					/>
					{/* <PrivateRoute path="/projects" exact component={Chat} /> */}
					<Redirect to="/"></Redirect>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
