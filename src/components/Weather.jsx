import React, { Component } from 'react';
class Weather extends Component {
	state = {};

	render() {
		const { name, temp, humidity, weather, message } = this.props.weatherCondition;
		return (
			<div>
				<div>
					<div className="weather__location">
						<label>Location :</label>
						<span>&nbsp;{name}</span>
					</div>
					<div className="weather__temp">
						<label>Temperature :</label>
						<span>&nbsp;{temp == null ? '' : temp + '°'}</span>
					</div>
					<div className="weather__humidity">
						<label>Humidity :</label>
						<span>&nbsp;{humidity == null ? '' : humidity}</span>
					</div>
					<div className="weather__description">
						<label>Weather :</label>
						<span>&nbsp;{weather == null ? '' : weather[0]['description']}</span>
					</div>
					<div />
					{message && (
						<div style={{ width: '50%' }} className="alert alert-info" role="alert">
							{message}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Weather;
