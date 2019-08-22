import React from 'react';

import { SimpleForm } from '../../../../_common';
import { loginFormFields } from '../../../../../assets/recruitmentFormFields';

const Usual = () => {
	return (
		<>
			<SimpleForm formFields={loginFormFields.formFields} />
			{/* <DialogControlGroup {...rest} onConfirmClick={handleClick} isDisabled={isDisabled} /> */}
		</>
	);
};

export default Usual;
