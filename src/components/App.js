import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../style/App.css';

import MainClock from './MainClock';
import MainDate from './MainDate';
import WelcomeMessage from './WelcomeMessage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<MainClock />
					<MainDate />
					<WelcomeMessage />
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
