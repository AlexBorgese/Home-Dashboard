import React from 'react';

import dateMap from '../utils/dateUtilities';
import '../style/date.css';

const getDate = () => {
	const date = new Date();

	const day = date.getDate();
	const month = dateMap.get(date.getMonth());
	const year = date.getFullYear();

	return `${day}  ${month}  ${year}`;
}

const MainDate = () => (
	<div className="date">
		{ getDate() }
	</div>
);

export default MainDate;
