import React from 'react';
import PropTypes from 'prop-types';

const textSize = {
	fs0: '12px',
	fs1: '13px',
	fs2: '14px',
	fs3: '15px',
	fs4: '16px',
	fs5: '18px',
	fs6: '24px',
	fs7: '30px',
};

const textColor = {
	light: '#BBBBBB',
	default: '#1B1E2D',
};

const family = {
	default: 'PFEncoreSansPro-Light',
	bold: 'PFEncoreSansPro-Book',
};

const Text = ({ customClass, color, size, text, fontFamily, textPosition }) => {
	const preparedStyle = {
		color: textColor[color],
		fontSize: textSize[size],
		fontFamily: family[fontFamily],
		textAlign: textPosition,
	};
	return (
		<div className={`c-text ${customClass}`} style={preparedStyle}>
			<span>{text}</span>
		</div>
	);
};

Text.propTypes = {
	customClass: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	text: PropTypes.string,
	fontFamily: PropTypes.string,
	textPosition: PropTypes.string,
};

Text.defaultProps = {
	customClass: '',
	color: 'default',
	size: 'fs4',
	text: '',
	fontFamily: 'default',
	textPosition: 'start',
};

export default Text;
