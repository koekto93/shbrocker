import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from '@lmui/components';

import './style.scss';

const DialogHeader = ({ headline, onClose }) => (
	<div className="c-dialog-header">
		<Header h={5} color={'mainText'}>
			{headline}
		</Header>
		<div className="c-dialog-header__icon-wrapper" onClick={onClose}>
			<div className="c-dialog-header__icon">
				<Icon color={'mainText'} size={'ic2'} name={'close'} />
			</div>
		</div>
	</div>
);

DialogHeader.propTypes = {
	headline: PropTypes.string,
	onClose: PropTypes.func,
};

DialogHeader.defaultProps = {
	headline: '',
	onClose: () => {},
};

export default DialogHeader;
