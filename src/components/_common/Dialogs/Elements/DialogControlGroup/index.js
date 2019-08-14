import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@lmui/components';
import './style.scss';

const DialogControlGroup = ({
	onCloseModal,
	onConfirmClick,
	isLoading,
	isDisabled,
	controlSettings: { reject, confirm },
}) => (
	<div className="c-dialog-control-group">
		<Button
			type={'border-mute40'}
			title={reject.title}
			textColor={'mute40'}
			size="lg"
			onPress={onCloseModal}
		/>
		<Button
			type="fill-primary"
			title={confirm.title}
			textColor="main"
			size="lg"
			disabled={isLoading || isDisabled ? 'fillGrey' : ''}
			onPress={onConfirmClick}
		/>
	</div>
);

DialogControlGroup.propTypes = {
	controlSettings: PropTypes.shape({
		reject: PropTypes.shape({ title: PropTypes.string }),
		confirm: PropTypes.shape({ title: PropTypes.string }),
	}),
	onConfirmClick: PropTypes.func,
	onCloseModal: PropTypes.func,
	isLoading: PropTypes.bool,
	isDisabled: PropTypes.bool,
};

DialogControlGroup.defaultProps = {
	controlSettings: {
		reject: {
			title: 'ОТМЕНИТЬ',
		},
		confirm: { title: 'ОТПРАВИТЬ' },
	},
	isLoading: false,
	isDisabled: true,
	onConfirmClick: () => {},
	onCloseModal: () => {},
};

export default DialogControlGroup;
