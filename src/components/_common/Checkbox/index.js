import React from 'react';
import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
//import PropTypes from 'prop-types';

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: grey[900],
		},
	},
});

const Checkbox = () => {
	return (
		<ThemeProvider theme={theme}>
			<MuiCheckbox defaultChecked />
		</ThemeProvider>
	);
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
