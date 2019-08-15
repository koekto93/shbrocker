//import _ from 'lodash';
import {
	//CITY_REG_EXP,
	CONTRACT_NUMBER_REG_EXP,
	EMAIL_REG_EXP,
	FIO_REG_EXP,
	PHONE_REG_EXP,
	TIN_REG_EXP,
	//LEGAL_ADDRESS_REG_EXP,
	//LEGAL_ENTITY_NAME_REG_EXP,
} from '../constants/regExps';

import fieldErrorMessages from '../constants/errors/fieldErrorMessages';
import fieldErrorIds from '../constants/errors/fieldErrorIds';

const {
	CANT_BE_EMPTY,
	PHONE,
	EMAIL,
	TIN,
	FIO,
	//CITY,
	CONTRACT_NUMBER,
	//LEGAL_ADDRESS,
	//LEGAL_ENTITY_NAME,
} = fieldErrorIds;

const getErrorMessage = name => fieldErrorMessages[name].errorMsg;

export const required = value => (value ? undefined : getErrorMessage(CANT_BE_EMPTY));

export const contractNumber = value =>
	CONTRACT_NUMBER_REG_EXP.test(value) ? undefined : getErrorMessage(CONTRACT_NUMBER);

export const tin = value => (TIN_REG_EXP.test(value) ? undefined : getErrorMessage(TIN));

export const contractorName = value => (FIO_REG_EXP.test(value) ? undefined : getErrorMessage(FIO));

export const contactPersonName = value =>
	FIO_REG_EXP.test(value) ? undefined : getErrorMessage(FIO);

export const contractorPhone = value =>
	PHONE_REG_EXP.test(value) ? undefined : getErrorMessage(PHONE);

export const contractorEmail = value =>
	EMAIL_REG_EXP.test(value) ? undefined : getErrorMessage(EMAIL);

export const composeValidators = (...validators) => value =>
	validators.reduce((error, validator) => error || validator(value), undefined);
