import React from 'react';
import { Select as MuiSelect, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const theme = createMuiTheme({
	typography: {
		fontFamily: 'PFEncoreSansPro-Light',
		fontSize: '16px',
	},
});

const Select = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		age: '',
		name: 'hai',
	});

	function handleChange(event) {
		setValues(oldValues => ({
			...oldValues,
			[event.target.name]: event.target.value,
		}));
	}

	return (
		<ThemeProvider theme={theme}>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="age-simple">Age</InputLabel>
				<MuiSelect
					value={values.age}
					onChange={handleChange}
					inputProps={{
						name: 'age',
						id: 'age-simple',
					}}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</MuiSelect>
			</FormControl>
		</ThemeProvider>
	);
};

export default Select;
