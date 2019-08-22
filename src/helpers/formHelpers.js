import React from 'react';
import { Grid } from '@material-ui/core';
import { Field } from 'react-final-form';

import { mapFieldComponents } from '../assets/recruitmentFormFields';

export const renderContent = content => {
	return content.map(({ colProps, component, ...restContent }, i) => (
		<Grid key={i} item {...colProps}>
			<Field component={mapFieldComponents[component]} {...restContent} />
		</Grid>
	));
};

export const renderFields = formFields => {
	return formFields.map(({ gridItemProps, content }, i) => (
		<Grid key={i} container>
			<Grid item {...gridItemProps}>
				<Grid container>{renderContent(content)}</Grid>
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
