import React from 'react';

import { Select, Input, Checkbox, Button } from '../../_common';

const MainPage = () => {
	return (
		<div>
			<div>Главная страница</div>
			<Select />
			<Input />
			<Checkbox />
			<Button color="default">TRY</Button>
		</div>
	);
};

export default MainPage;
