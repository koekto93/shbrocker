import React from 'react';
import { Grid } from '@material-ui/core';

import { SimpleForm, Button } from '../../../../_common';
import { accessRecoveryFields } from '../../../../../assets/recruitmentFormFields';

const AccessRecovery = () => {
	return (
		<Grid container className="l-access-recovery-login-part">
			<Grid item xs={12} lg={4}>
				<SimpleForm {...accessRecoveryFields} />

				<Grid
					container
					alignItems="center"
					justify="space-between"
					spacing={2}
					className="l-access-recovery-login-part__control-group"
				>
					<Grid item xs={6}>
						<Button color="light">Назад</Button>
					</Grid>
					<Grid item xs={6}>
						<Button color="default">Восстановить</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AccessRecovery;
