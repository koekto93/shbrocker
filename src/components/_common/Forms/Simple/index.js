import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Grid } from '@material-ui/core';

import { Text } from '../../index';
import { renderFields } from '../../../../helpers/formHelpers';

function onSubmit(values) {
	//console.log('onSubmit', values);
}

//TODO Сделать адекватные названия полей
const Simple = ({ formFields }) => {
	//console.log(loginFormFields);
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<Grid container>
					<Grid item xs={12} lg={8}>
						<Text />
						{/* <Text block color="mainText" size="fs2" weight="bold" mb={'gap5'}>
							Данные компании
						</Text> */}
						<form onSubmit={handleSubmit}>{renderFields(formFields)}</form>
					</Grid>
				</Grid>
			)}
		/>
	);
};

Simple.propTypes = {
	screenSize: PropTypes.string,
	formFields: PropTypes.arrayOf(
		PropTypes.shape({ gridItemProps: PropTypes.object, content: PropTypes.array })
	),
};

export default Simple;
