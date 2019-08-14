import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DialogWithAction, DialogWithComment, DialogWithCheckboxes } from '../index';
import DialogTemplate from '../Elements/DialogTemplate';

import { getOpenModalName, getLoadingStatus } from '../../../selectors/modal';
import modalDialogData from '../../../constants/modalDialogData';

function renderModals({ openModalName, isLoading }) {
	return modalDialogData.map(data => {
		const { type, modalName, headline, text, ...rest } = data;
		let dialogContent = null;

		if (type === 'simple') {
			//dialogContent = <DialogSimple {...rest} />;
		} else if (type === 'withControl') {
			dialogContent = <DialogWithAction isLoading={isLoading} {...rest} />;
		} else if (type === 'note') {
			dialogContent = <DialogWithComment isLoading={isLoading} {...rest} />;
		} else if (type === 'withCheckboxes') {
			dialogContent = <DialogWithCheckboxes isLoading={isLoading} {...rest} />;
		}

		return (
			<DialogTemplate
				openModalName={openModalName}
				modalName={modalName}
				key={modalName}
				headline={headline}
				text={text}
			>
				{dialogContent}
			</DialogTemplate>
		);
	});
}

const DialogsContainer = props => {
	return <React.Fragment>{renderModals(props)}</React.Fragment>;
};

DialogsContainer.propTypes = {
	//redux
	openModalName: PropTypes.string,
	isLoading: PropTypes.bool,
};

DialogsContainer.defaultProps = {
	openModalName: '',
	isLoading: false,
};

const mapStateToProps = state => ({
	openModalName: getOpenModalName(state),
	isLoading: getLoadingStatus(state),
});

export default connect(mapStateToProps)(DialogsContainer);
