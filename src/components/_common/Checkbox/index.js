import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

//import PropTypes from 'prop-types';

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
			main: grey[900],
		},
	},
});

//доделать чекбокс. добавить сюда иконки состояний бокса
const Checkbox = () => {
	const { label } = useStyles();
	const formControlClasses = { label };
	return (
		<ThemeProvider theme={theme}>
			<FormControlLabel
				control={
					<MuiCheckbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
						value="checkedH"
					/>
				}
				label="Custom icon"
				classes={formControlClasses}
			/>
		</ThemeProvider>
	);
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
