import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { DialogControlGroup } from '../Elements';
import RefuseServiceContractor from '../../Forms/RefuseServiceContractor';
import { getComments } from '../../../selectors/modal';
import { dynamicTypeAction } from '../../../actions/recruitmentActions';

import './style.scss';

const DialogWithCheckboxes = ({ actionType, options, dynamicTypeAction, ...rest }) => {
	const [isDisabled, setDisableStatus] = useState(false);
	const onSubmit = values => {
		dynamicTypeAction(actionType, values);
	};

	const handleFormStatus = ({ valid }) => {
		setDisableStatus(!valid);
	};

	const handleClick = event => {
		event.preventDefault();
		document
			.getElementById('refuseServiceContractorForm')
			.dispatchEvent(new Event('submit', { cancelable: true }));
	};

	return (
		<div className="c-dialog-with-action">
			<RefuseServiceContractor
				options={options}
				onSubmit={onSubmit}
				onHandleFormStatus={handleFormStatus}
			/>
			<DialogControlGroup {...rest} onConfirmClick={handleClick} isDisabled={isDisabled} />
		</div>
	);
};

DialogWithCheckboxes.propTypes = {
	actionType: PropTypes.string,
	options: PropTypes.array,
	//redux
	dynamicTypeAction: PropTypes.func,
};

DialogWithCheckboxes.defaultProps = {
	actionType: '',
	dynamicTypeAction: () => {},
};

const mapStateToProps = state => ({
	comments: getComments(state),
});

export default connect(
	mapStateToProps,
	{ dynamicTypeAction }
)(DialogWithCheckboxes);
