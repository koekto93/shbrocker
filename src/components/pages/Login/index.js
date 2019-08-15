import React from 'react';
import { Grid } from '@material-ui/core';

//import { Logo } from '../../_common';
import './style.scss';

const Login = () => {
	return (
		<Grid container className="l-login">
			<Grid item xs={4} xl={3}>
				<div className="l-login__content">{/* <Logo /> */}</div>
			</Grid>
			<Grid item xs={8} xl={9}>
				{/* <div className="l-login__block-with-image"></div> */}
			</Grid>
		</Grid>
	);
};

export default Login;
