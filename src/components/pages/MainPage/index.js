import React from 'react';
import { Grid } from '@material-ui/core';

import { Select, Input, Checkbox, Button, RadioButton } from '../../_common';
import './style.scss';

const MainPage = () => {
	return (
		<Grid container>
			<Grid item xs={4}>
				<div className="right">ff</div>
			</Grid>
			<Grid item xs={8}>
				<div>Главная страница</div>
				<Select />
				<Input />
				<Checkbox />
				<div className="button-wrapper">
					<Button color="light">TRY</Button>
				</div>
				<RadioButton />
			</Grid>
		</Grid>
	);
};

export default MainPage;
