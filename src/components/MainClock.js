import React from 'react';
import Clock from 'react-live-clock';

import '../style/clock.css'

const MainClock = () => (
	<div className="clock">
		<Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />
	</div>
);

export default MainClock;
