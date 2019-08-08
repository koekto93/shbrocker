import React from 'react';
import { Input as MuiInput, FormControl, InputLabel } from '@material-ui/core';
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
});

const Input = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<ThemeProvider theme={theme}>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="age-simple">Age</InputLabel>
				<MuiInput
					className={classes.icon}
					value={value}
					onChange={handleChange}
					inputProps={{
						name: 'age',
						id: 'age-simple',
					}}
				/>
			</FormControl>
		</ThemeProvider>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
