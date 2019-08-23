import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

import { Text } from '../../index';
import { renderFields } from '../../../../helpers/formHelpers';

function onSubmit(values) {
	//console.log('onSubmit', values);
}

const Simple = ({ formFields, captionText }) => {
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<>
					<Text text={captionText ? captionText : ''} size="fs7" fontFamily="bold" />
					<form onSubmit={handleSubmit}>{renderFields(formFields)}</form>
				</>
			)}
		/>
	);
};

Simple.propTypes = {
	screenSize: PropTypes.string,
	captionText: PropTypes.string,
	formFields: PropTypes.arrayOf(
		PropTypes.shape({ gridItemProps: PropTypes.object, content: PropTypes.array })
	),
};

export default Simple;
