import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../_common';
import './style.scss';

const FormControlGroup = ({
	onCloseModal,
	onConfirmClick,
	isLoading,
	isDisabled,
	controlSettings: { reject, confirm },
}) => (
	<div className="c-dialog-control-group">
		<Button color="light" onClick={onCloseModal}></Button>
		<Button
			color="default"
			onClick={onConfirmClick}
			//disabled={isLoading || isDisabled ? 'fillGrey' : ''}
		></Button>
	</div>
);

FormControlGroup.propTypes = {
	controlSettings: PropTypes.shape({
		reject: PropTypes.shape({ title: PropTypes.string }),
		confirm: PropTypes.shape({ title: PropTypes.string }),
	}),
	onConfirmClick: PropTypes.func,
	onCloseModal: PropTypes.func,
	isLoading: PropTypes.bool,
	isDisabled: PropTypes.bool,
};

FormControlGroup.defaultProps = {
	controlSettings: {
		reject: {
			title: 'ОТМЕНИТЬ',
		},
		confirm: { title: 'ОТПРАВИТЬ' },
	},
	isLoading: false,
	isDisabled: false,
	onConfirmClick: () => {},
	onCloseModal: () => {},
};

export default FormControlGroup;
