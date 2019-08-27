import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

import MainPage from './MainPage';
import SecondPage from './SecondPage';
import Login from './Login';
import './style.scss';

class Pages extends Component {
	render() {
		return (
			<Grid container className="l-pages">
				<Switch>
					<Redirect exact from="/" to="/login" />
					<Route path="/mainPage" component={MainPage} />
					<Route path="/secondPage" component={SecondPage} />
					<Route path="/login" component={Login} />
				</Switch>
			</Grid>
		);
	}
}

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(Pages));

/* <Link to="/mainPage">main</Link>
					<Link to="/secondPage">secondPage</Link> */
