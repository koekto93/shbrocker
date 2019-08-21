//const getErrorMessage = name => fieldErrorMessages[name].errorMsg;

export const required = value => (value ? undefined : 'Поле не может быть пустым');

/* export const contractNumber = value =>
	CONTRACT_NUMBER_REG_EXP.test(value) ? undefined : getErrorMessage(CONTRACT_NUMBER);

export const tin = value => (TIN_REG_EXP.test(value) ? undefined : getErrorMessage(TIN));

export const contractorName = value => (FIO_REG_EXP.test(value) ? undefined : getErrorMessage(FIO));

export const contactPersonName = value =>
	FIO_REG_EXP.test(value) ? undefined : getErrorMessage(FIO);

export const contractorPhone = value =>
	PHONE_REG_EXP.test(value) ? undefined : getErrorMessage(PHONE);

export const contractorEmail = value =>
	EMAIL_REG_EXP.test(value) ? undefined : getErrorMessage(EMAIL); */

export const composeValidators = (...validators) => value =>
	validators.reduce((error, validator) => error || validator(value), undefined);
