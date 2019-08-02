import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

/* const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
})); */

const MainPage = () => {
	//const classes = useStyles();
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
		<div>
			<div>Главная страница</div>
			<Select
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
			</Select>
		</div>
	);
};

export default MainPage;
