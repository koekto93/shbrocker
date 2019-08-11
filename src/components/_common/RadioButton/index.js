import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Radio as MuiRadio, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	label: {
		color: '#1B1E2D',
		fontFamily: 'PFEncoreSansPro-Book',
		fontSize: 14,
	},
}));

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: '#000000',
		},
	},
});

const Radio = withStyles({
	root: {
		color: '#000000',
		'&$checked': {
			color: '#000000',
		},
	},
	checked: {},
})(props => <MuiRadio color="default" {...props} />);

const RadioButton = () => {
	const { label } = useStyles();
	const formControlClasses = { label };
	return (
		<ThemeProvider theme={theme}>
			<FormControlLabel
				value="female"
				control={<Radio />}
				label="Female"
				labelPlacement="end"
				classes={formControlClasses}
			/>
		</ThemeProvider>
	);
};

export default RadioButton;
