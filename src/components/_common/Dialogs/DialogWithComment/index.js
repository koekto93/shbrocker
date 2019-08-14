import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from '@lmui/components';

import { Comments } from '../../index';
import { DialogControlGroup } from '../Elements';
import { getComments } from '../../../selectors/modal';
import { dynamicTypeAction } from '../../../actions/recruitmentActions';
import { REMOVE_COMMENT } from '../../../redux/modules/modal';
import './style.scss';

const DialogWithComment = ({ actionType, dynamicTypeAction, comments, ...rest }) => {
	const [commentValue, setCommentValue] = useState('');

	const handleChange = event => {
		setCommentValue(event.target.value);
		event.preventDefault();
	};

	const handleClick = () => {
		if (commentValue) {
			const comment = {
				id: String(new Date()),
				initials: 'ИХ',
				name: 'Идрик',
				lastName: 'Хиков',
				shop: 'Москва, ЗИЛ',
				authorLDAP: '60071630',
				text: commentValue,
			};
			dynamicTypeAction(actionType, comment);
			//TODO Сделать зануление только после подтвержения, что коммент папал на сервер.
			setCommentValue('');
		}
	};

	return (
		<div className="c-dialog-with-action">
			<Comments
				comments={comments}
				actionType={REMOVE_COMMENT}
				removeCommentAction={dynamicTypeAction}
			/>
			<div className="c-dialog-with-action__field-wrapper">
				<Input
					placeholder="Пример: Встретиться завтра"
					value={commentValue}
					onChange={handleChange}
				/>
			</div>

			<DialogControlGroup {...rest} onConfirmClick={handleClick} />
		</div>
	);
};

DialogWithComment.propTypes = {
	actionType: PropTypes.string,
	//redux
	dynamicTypeAction: PropTypes.func,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			initials: PropTypes.string,
			name: PropTypes.string,
			lastName: PropTypes.string,
			shop: PropTypes.string,
			authorLDAP: PropTypes.string,
			text: PropTypes.string,
		})
	),
};

DialogWithComment.defaultProps = {
	actionType: '',
	dynamicTypeAction: () => {},
	comments: [],
};

const mapStateToProps = state => ({
	comments: getComments(state),
});

export default connect(
	mapStateToProps,
	{ dynamicTypeAction }
)(DialogWithComment);
