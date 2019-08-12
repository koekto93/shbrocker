import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ name, fill }) => {
	if (!name) return null;
	return <img src={require(`../../../images/${name}.svg`)} fill={fill} alt={`${name}Img`} />;
};

SVGIcon.propTypes = {
	name: PropTypes.string,
	fill: PropTypes.string,
};

SVGIcon.defaultProps = {
	name: '',
	fill: '#fff',
};

export default SVGIcon;
