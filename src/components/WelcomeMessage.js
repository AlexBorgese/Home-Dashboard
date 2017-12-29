import React, { Component } from 'react';

import '../style/welcome.css';

class WelcomeMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasMessage: false,
			text: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.refs.welcomeMessage.value) {
			this.setState({
				hasMessage: true,
				text: this.refs.welcomeMessage.value
			});
		}
	}

	render() {
		if (this.state.hasMessage) {
			return(
					<div className="welcome-message-text">
						{ this.state.text }
					</div>
			);
		} else {
			return (
					<form className="welcome-message-form" onSubmit={ this.handleSubmit }>
						<label>
							<input type="text" ref="welcomeMessage" maxLength={ 16 } />
						</label>
						<input type="submit" value="Submit" />
					</form>
			);
		}
	}
}

export default WelcomeMessage;
