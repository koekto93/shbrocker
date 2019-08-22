import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../../index';

const FormInput = ({ input, meta, screenSize, ...rest }) => {
	return (
		<Input
			errorText={meta.touched && meta.error}
			//size={screenSize}
			{...input}
			{...rest}
		/>
	);
};

FormInput.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object,
	rest: PropTypes.array,
	screenSize: PropTypes.string,
};

export default FormInput;
