import React from 'react';
import { TextField } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const theme = createMuiTheme({
	typography: {
		fontFamily: 'PFEncoreSansPro-Light',
		fontSize: 16,
	},
	overrides: {
		MuiFormLabel: {
			asterisk: {
				color: '#db3131',
				'&$error': {
					color: '#db3131',
				},
			},
		},
	},
});

const Input = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<ThemeProvider theme={theme}>
			<TextField
				required
				className={classes.formControl}
				value={value}
				onChange={handleChange}
				label="Age"
			/>
		</ThemeProvider>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
