import React from 'react';
import { Grid } from '@material-ui/core';

import { Logo, SimpleForm } from '../../_common';
import './style.scss';

const Login = () => {
	return (
		<Grid container className="l-login">
			<Grid item xs={4} xl={3}>
				<div className="l-login__content">
					<Logo />
					<SimpleForm />
				</div>
			</Grid>
			<Grid item xs={8} xl={9}>
				<div className="l-login__block-with-image" />
			</Grid>
		</Grid>
	);
};

export default Login;
