import React from 'react';

import { SVGIcon } from '../index';
import './style.scss';

const Logo = () => (
	<div className="c-logo">
		<div className="c-logo__image">
			<SVGIcon name="logo" fill="#000" />
		</div>
		<div className="c-logo__caption">
			<span>Личный кабинет брокера</span>
		</div>
	</div>
);

export default Logo;
