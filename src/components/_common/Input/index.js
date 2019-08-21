import React from 'react';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//import { PropagateLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	formControl: {
		marginBottom: theme.spacing(1),
		width: '100%',
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

const Input = ({ label, value, name, required, onChange, errorText }) => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<FormControl className={classes.formControl} error>
				<TextField
					required={required}
					value={value}
					onChange={onChange}
					label={label}
					name={name}
					aria-describedby="component-error-text"
				/>
				{errorText && <FormHelperText>{errorText}</FormHelperText>}
			</FormControl>
		</ThemeProvider>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	onChange: PropTypes.func,
};

Input.defaultProps = {
	onChange: () => {},
};

export default Input;
