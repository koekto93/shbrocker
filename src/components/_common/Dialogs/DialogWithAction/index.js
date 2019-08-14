import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dynamicTypeAction } from '../../../actions/recruitmentActions';
import { DialogControlGroup } from '../Elements';
import './style.scss';

const DialogWithAction = ({ actionType, dynamicTypeAction, ...rest }) => {
	const handleClick = () => {
		dynamicTypeAction(actionType);
	};
	return (
		<div className="c-dialog-with-action">
			<DialogControlGroup {...rest} onConfirmClick={handleClick} />
		</div>
	);
};

DialogWithAction.propTypes = {
	actionType: PropTypes.string,
	//redux
	dynamicTypeAction: PropTypes.func,
};

DialogWithAction.defaultProps = {
	actionType: '',
	dynamicTypeAction: () => {},
};

export default connect(
	null,
	{ dynamicTypeAction }
)(DialogWithAction);
