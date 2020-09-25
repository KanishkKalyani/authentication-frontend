import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../utils/helpers";
import "../Styles/Layout.css";

const Layout = ({ children, history }) => {
	const nav = () => (
		<div className="layout-header-container">
			<div className="app-info">
				<img
					src="../apple-icon-180x180.png"
					alt="kanban-logo"
					className="kanban-logo-img"
				/>
				<div className="app-name">CHAT APP</div>
			</div>
			<ul className="layout-list">
				{isAuth() && (
					<>
						<li>
							<span className="user-name">{isAuth().name}</span>
						</li>
					</>
				)}
				<li>
					<Link className="layout-item" to="/">
						Home
					</Link>
				</li>
				{!isAuth() && (
					<>
						<li>
							<Link className="layout-item" to="/sign-in">
								Login
							</Link>
						</li>
						<li>
							<Link className="layout-item" to="/sign-up">
								Sign Up
							</Link>
						</li>
					</>
				)}

				{isAuth() && (
					<li>
						<span
							className="layout-item"
							onClick={() => {
								signout(() => {
									history.push("/");
								});
							}}>
							Logout
						</span>
					</li>
				)}
			</ul>
		</div>
	);

	return (
		<Fragment>
			{nav()}
			<div className="children-container">{children}</div>
		</Fragment>
	);
};

export default withRouter(Layout);
