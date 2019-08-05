import React from 'react';
import { Select as MuiSelect, MenuItem } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'PFEncoreSansPro-Light',
		fontSize: '16px',
	},
});

const Select = () => {
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
		</ThemeProvider>
	);
};

export default Select;
