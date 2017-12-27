import React from 'react';

import '../style/welcome.css';

const WelcomeMessage = () => (
	<form className="welcome-message">
		<label>
			<input type="text" name="name" />
		</label>
		<input type="submit" value="Submit" />
	</form>
);

export default WelcomeMessage;
