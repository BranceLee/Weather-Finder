import React, { Component } from 'react';
class Header extends Component {
	state = {};
	render() {
		return (
			<div>
				<h2 className="title-container__title">Weather Finder</h2>
				<p className="title-container__subtitle">
					You can find out the temperature,weather condition and more ...
				</p>
			</div>
		);
	}
}

export default Header;
