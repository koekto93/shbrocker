import React from 'react';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	formHelperText: {
		margin: '4px 0 0 8px',
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
//error выставляет цвет для сообщения об ошибке.

const Input = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<ThemeProvider theme={theme}>
			<FormControl className={classes.formControl} error>
				<TextField
					required
					value={value}
					onChange={handleChange}
					label="Age"
					aria-describedby="component-error-text"
				/>
				<FormHelperText /* className={classes.formHelperText} */>Error</FormHelperText>
			</FormControl>
		</ThemeProvider>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
