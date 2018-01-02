import React, { Component } from 'react';
import '../style/logo.css';
import '../style/App.css';

import MainClock from './MainClock';
import MainDate from './MainDate';
import WelcomeMessage from './WelcomeMessage';
import TubeStatus from './TubeStatus';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-header-top-left">
						<MainClock />
						<MainDate />
					</div>
					<div className="logo">
						logo goes here
					</div>
					<div className="App-header-top-right">
						<WelcomeMessage />
					</div>
				</header>
				<div className="App-content">
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
					<TubeStatus />
				</div>
			</div>
		);
	}
}

export default App;
