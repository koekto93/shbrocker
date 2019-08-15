import React from 'react';
import View from '@lmui/components/View';
import Text from '@lmui/components/Text';
import { Field } from 'react-final-form';

export const renderContent = (content, mapFieldComponents, globalFormOptions) => {
	return content.map(({ colProps, component, ...restContent }, i) => (
		<View key={i} {...colProps}>
			{component === 'text' ? (
				<Text {...restContent}>{restContent.text}</Text>
			) : (
				<Field
					component={mapFieldComponents[component]}
					{...restContent}
					{...globalFormOptions}
				/>
			)}
		</View>
	));
};

export const renderFields = (formFields, mapFieldComponents, globalFormOptions) => {
	return formFields.map((item, i) => (
		<View key={i} row {...item.rowProps}>
			{renderContent(item.content, mapFieldComponents, globalFormOptions)}
		</View>
	));
};
