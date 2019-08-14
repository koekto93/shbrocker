import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@lmui/components';

import './style.scss';

const DialogSimple = ({ text }) => (
	<div className="c-dialog-simple">
		<Text block color="mainText" size="fs1">
			{text}
		</Text>
	</div>
);

DialogSimple.propTypes = {
	text: PropTypes.string,
};

DialogSimple.defaultProps = {
	text: '',
};

export default DialogSimple;
