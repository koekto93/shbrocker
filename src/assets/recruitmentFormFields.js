import {
	required,
	composeValidators,
	/* contractNumber,
	tin,
	contractorName,
	contactPersonName,
	contractorPhone,
	contractorEmail,
	//commissionPart,
	 */
} from '../helpers/recruitmentValidationsHelper';

import {
	FormInput /* FormCheckboxGroup, FormRadioGroup  */,
} from '../components/_common/Forms/Elements';

export const mapFieldComponents = {
	input: FormInput,
	//checkboxGroup: FormCheckboxGroup,
	//radioGroup: FormRadioGroup,
};

//---------

export const loginFormFields = {
	captionText: null,
	formFields: [
		{
			gridItemProps: { xs: 12 },
			content: [
				{
					colProps: { xs: 12 },
					name: 'login',
					required: true,
					label: 'Логин',
					component: 'input',
					validate: composeValidators(required),
				},
				{
					colProps: { xs: 12 },
					name: 'password',
					type: 'password',
					required: true,
					label: 'Пароль',
					component: 'input',
					validate: composeValidators(required),
				},
			],
		},
	],
};

export const passwordRecoveryFormFields = {
	captionText: 'Восстановление пароля',
	formFields: [
		{
			gridItemProps: { xs: 12 },
			content: [
				{
					colProps: { xs: 12 },
					name: 'newPassword',
					type: 'password',
					required: true,
					label: 'Введите новый пароль',
					component: 'input',
					validate: composeValidators(required),
				},
				{
					colProps: { xs: 12 },
					name: 'confirmPassword',
					type: 'password',
					required: true,
					label: 'Повторите новый пароль',
					component: 'input',
					validate: composeValidators(required),
				},
			],
		},
	],
};

export const accessRecoveryFields = {
	captionText: 'Восстановление доступа',
	formFields: [
		{
			gridItemProps: { xs: 12 },
			content: [
				{
					colProps: { xs: 12 },
					name: 'email',
					type: 'text',
					required: true,
					label: 'Укажите ваш email',
					component: 'input',
					validate: composeValidators(required),
				},
			],
		},
	],
};

//----------

// Пришлось разделить данные для чекбоксов
/* const firstAboutContractorOptions = [
	{
		name: 'aboutContractorControl',
		value: 'isUsingGeneralTaxationSystem',
		text: 'Использует общую систему налогообложения (ОСНО)',
	},
];

const secondAboutContractorOptions = [
	{
		name: 'aboutContractorControl',
		value: 'longerThanAYear',
		text: 'ИП дольше года',
	},
	{
		name: 'aboutContractorControl',
		value: 'sameProducts',
		text: 'Продаёт теже товары что и LM',
	},
];

const companyServiceOptions = {
	firstPart: [
		{
			name: 'services',
			value: 'laying tiles',
			text: 'Укладка плитки',
		},
		{
			name: 'services',
			value: 'construction works',
			text: 'Строительные работы',
		},
		{
			name: 'services',
			value: 'heating boilers',
			text: 'Установка отопительных котлов',
		},
		{
			name: 'services',
			value: 'doors',
			text: 'Установка дверей входных и мехжкомнатных',
		},
	],
	secondPart: [
		{
			name: 'services',
			value: 'plumbing and tile',
			text: 'Сантехника и плитка',
		},

		{
			name: 'services',
			value: 'Overlock',
			text: 'Оверлок',
		},

		{
			name: 'services',
			value: 'joinery',
			text: 'Распил столярных изделий',
		},

		{
			name: 'services',
			value: 'Electricity and water supply',
			text: 'Электрика и водоснабжение',
		},
	],
};

const companyStatusOptions = [
	{
		name: 'contractorStatus',
		value: 'value1',
		text: 'Первый подрядчик для данной услуги в магазине',
	},
	{
		name: 'contractorStatus',
		value: 'value2',
		text: 'Дополнительный подрядчик для данной услуги в магазине',
	},
	{
		name: 'contractorStatus',
		value: 'value3',
		text: 'Подрядчик вместо другого',
		additionalField: {
			name: 'previousСontractor',
			placeholder: 'Наименование юр. лица предыдущего подрядчика',
			component: 'input',
		},
	},
	{
		name: 'contractorStatus',
		value: 'value4',
		text: 'Смена юр. лица действующего подрядчика',
		additionalField: {
			name: 'changeLegalEntityOfExistingContractor',
			placeholder: 'Наименование предыдущего юр. лица',
			component: 'input',
		},
	},
]; */

/* export const companyFormFields = [
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'contractNumber',
				placeholder: '№ договора',
				disabled: true,
				component: 'input',
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'governmentRegistrationNumber',
				placeholder: 'ОГРН',
				component: 'input',
				mask: '999/9999',
				validate: composeValidators(required, contractNumber),
			},
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'tin',
				placeholder: 'ИНН',
				component: 'input',
				validate: composeValidators(required, tin),
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				name: 'contractorName',
				placeholder: 'Наименование организации / юр. лица',
				component: 'input',
				validate: composeValidators(required, contractorName),
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				name: 'contactPersonName',
				placeholder: 'ФИО контактного лица',
				component: 'input',
				validate: composeValidators(required, contactPersonName),
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				name: 'contactPersonPosition',
				placeholder: 'Должность',
				component: 'input',
				validate: composeValidators(required),
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'contractorPhone',
				placeholder: 'Телефон',
				component: 'input',
				//mask: '+7 (999) 999-99-99',
				mask: '9999999999',
				validate: composeValidators(required, contractorPhone),
			},
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'contractorEmail',
				placeholder: 'Эл. почта',
				component: 'input',
				validate: composeValidators(required, contractorEmail),
			},
		],
	},
	{
		rowProps: { mt: 'gap9' },
		content: [
			{
				name: 'aboutContractorOptions',
				colProps: { 'col-xl-12': 'col-xl-12' },
				options: firstAboutContractorOptions,
				component: 'checkboxGroup',
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-3': 'col-xl-3' },
				name: 'commissionPart',
				placeholder: '%',
				component: 'input',
				validate: required,
			},
		],
	},
	{
		rowProps: {},
		content: [
			{
				name: 'aboutContractorOptions',
				colProps: { 'col-xl-12': 'col-xl-12' },
				options: secondAboutContractorOptions,
				component: 'checkboxGroup',
			},
		],
	},
	{
		rowProps: { mt: 'gap9' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				component: 'text',
				block: true,
				color: 'mainText',
				size: 'fs2',
				weight: 'bold',
				text: 'Услуги',
			},
		],
	},

	{
		rowProps: { mt: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'services',
				component: 'checkboxGroup',
				options: companyServiceOptions.firstPart,
			},
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'services',
				component: 'checkboxGroup',
				options: companyServiceOptions.secondPart,
			},
		],
	},
	{
		rowProps: { mb: 'gap5', mt: 'gap9' },
		content: [
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'staffQuantity',
				placeholder: 'Сотрудников в офисе',
				component: 'input',
				validate: composeValidators(required),
			},
			{
				colProps: { 'col-xl-6': 'col-xl-6' },
				name: 'artisansQuantity',
				placeholder: 'Количество мастеров',
				component: 'input',
				validate: composeValidators(required),
			},
		],
	},
	{
		rowProps: { mb: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				name: 'providerWebSite',
				placeholder: 'Адрес сайта',
				component: 'input',
				validate: composeValidators(required),
			},
		],
	},
	{
		rowProps: {},
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				name: 'aboutCompany',
				placeholder: 'О компании',
				component: 'input',
				validate: composeValidators(required),
			},
		],
	},
	{
		rowProps: { mt: 'gap9' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				component: 'text',
				block: true,
				color: 'mainText',
				size: 'fs2',
				weight: 'bold',
				text: 'Статус подрядчика:',
			},
		],
	},
	{
		rowProps: { mt: 'gap5' },
		content: [
			{
				colProps: { 'col-xl-12': 'col-xl-12' },
				name: 'contactStatus',
				component: 'radioGroup',
				options: companyStatusOptions,
			},
		],
	},
];
 */
