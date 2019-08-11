import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
//import { grey, blueGrey } from '@material-ui/core/colors';

const styledBy = (property, mapping) => props => mapping[props[property]];

const Button = withStyles({
	root: {
		borderRadius: 3,
		width: '100%',
		height: 35,
		//padding: '0 30px',
		boxShadow: 'none',
		fontFamily: 'PFEncoreSansPro-Light',
		fontSize: 13,

		background: styledBy('color', {
			default: '#8E97A8',
			light: 'white',
		}),
		color: styledBy('color', {
			default: 'white',
			light: '#7C7C7C',
		}),
		border: styledBy('color', {
			default: 0,
			light: '1px solid #AAAAAA',
		}),
		'&:hover': {
			background: styledBy('color', {
				default: '#727987',
				light: '#727987',
			}),
			color: styledBy('color', {
				default: 'white',
				light: 'white',
			}),
			border: styledBy('color', {
				default: 0,
				light: 0,
			}),
		},
	},
})(({ classes, color, ...other }) => <MuiButton className={classes.root} {...other} />);

export default Button;
