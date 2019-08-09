import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
//import { grey, blueGrey } from '@material-ui/core/colors';

const styledBy = (property, mapping) => props => mapping[props[property]];

const Button = withStyles({
	root: {
		borderRadius: 3,

		color: 'white',
		//height: 48,
		//padding: '0 30px',
		boxShadow: 'none',
		fontFamily: 'PFEncoreSansPro-Light',
		fontSize: 13,

		background: styledBy('color', {
			default: '#8E97A8',
			light: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
		}),
		border: 0,
		'&:hover': {
			background: styledBy('color', {
				default: '#727987',
				light: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
			}),
		},
	},
})(({ classes, color, ...other }) => <MuiButton className={classes.root} {...other} />);

export default Button;
