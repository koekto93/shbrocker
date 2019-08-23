import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { SimpleForm, Text, Button } from '../../../../_common';
import { loginFormFields } from '../../../../../assets/recruitmentFormFields';

const Usual = () => {
	return (
		<Grid container className="l-usual-login-part">
			<Grid item xs={12} lg={4}>
				<SimpleForm {...loginFormFields} />
				<Link to="/recovery">
					<Text text="Забыли пароль?" textPosition="end" size="fs0" />
				</Link>
				<Grid container alignItems="center" className="l-usual-login-part__control-group">
					<Grid item xs={6}>
						<Link to="/recovery">
							<Text text="Зарегистрироваться" size="fs0" color="light" />
						</Link>
					</Grid>
					<Grid item xs={6}>
						<Button color="default">Вход</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Usual;
