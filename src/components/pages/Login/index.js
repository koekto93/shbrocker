import React from 'react';
import { Route, /* Redirect, */ Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { Logo } from '../../_common';
import { Usual, Recovery, Registration } from './LoginState';
import './style.scss';

const Login = () => {
	const onSubmit = values => {
		//dynamicTypeAction(actionType, values);
		console.log('submit');
	};

	const handleClick = event => {
		event.preventDefault();
		document
			.getElementById('refuseServiceContractorForm')
			.dispatchEvent(new Event('submit', { cancelable: true }));
	};
	return (
		<Grid container className="l-login">
			<Grid item xs={4} xl={3}>
				<div className="l-login__content">
					{/* <Logo /> */}
					<Switch>
						<Route path="/login" component={Usual} />
						<Route path="/recovery" component={Recovery} />
						<Route path="/registration" component={Registration} />
					</Switch>
				</div>
			</Grid>
			{/* <Grid item xs={8} xl={9}>
				<div className="l-login__block-with-image" />
			</Grid> */}
		</Grid>
	);
};

export default Login;
