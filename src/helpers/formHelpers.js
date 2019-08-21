import React from 'react';
import { Grid } from '@material-ui/core';
import { Field } from 'react-final-form';

export const renderContent = (content, mapFieldComponents) => {
	return content.map(({ colProps, component, ...restContent }, i) => (
		<Grid key={i} item {...colProps}>
			<Field component={mapFieldComponents[component]} {...restContent} />
		</Grid>
	));
};

export const renderFields = (formFields, mapFieldComponents) => {
	return formFields.map(({ gridItemProps, content }, i) => (
		<Grid key={i} container>
			<Grid item {...gridItemProps}>
				{renderContent(content, mapFieldComponents)}
			</Grid>
		</Grid>
	));
};

/*  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js?(x)": [
      "node_modules/.bin/eslint --max-warnings=0",
      "prettier --write",
      "git add"
    ]
  } */
