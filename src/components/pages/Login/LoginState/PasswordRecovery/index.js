import React from 'react';
import { Grid } from '@material-ui/core';

import { SimpleForm, Button } from '../../../../_common';
import { passwordRecoveryFormFields } from '../../../../../assets/recruitmentFormFields';

const PasswordRecovery = () => {
	return (
		<Grid container className="l-password-recovery-login-part">
			<Grid item xs={12} lg={4}>
				<SimpleForm {...passwordRecoveryFormFields} />

				<Grid
					container
					alignItems="center"
					justify="flex-end"
					className="l-password-recovery-login-part__control-group"
				>
					<Grid item xs={6}>
						<Button color="default">Сохранить</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PasswordRecovery;
