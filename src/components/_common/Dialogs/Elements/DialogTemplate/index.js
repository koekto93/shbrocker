import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@lmui/components';

import DialogHeader from '../DialogHeader';
import withModal from '../../../../decorators/withModal';

import './style.scss';

const DialogTemplate = ({ headline, onCloseModal, children, text, ...rest }) => {
	const clonedChildren = React.isValidElement(children)
		? React.cloneElement(children, {
				onCloseModal: onCloseModal,
			}) // prettier-ignore
		: null;

	return (
		<div className="c-dialog-template-wrapper">
			<div className="c-dialog-template">
				<DialogHeader headline={headline} onClose={onCloseModal} />
				<div className="c-dialog-template__text">
					<Text color="mainText" size="fs1">
						{text}
					</Text>
				</div>
				{clonedChildren}
			</div>
		</div>
	);
};

DialogTemplate.propTypes = {
	headline: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	//decorator withModal
	onCloseModal: PropTypes.func,
};

DialogTemplate.defaultProps = {
	headline: '',
	children: null,
	text: '',
	//decorator withModal
	onCloseModal: () => {},
};

export default withModal(DialogTemplate);
