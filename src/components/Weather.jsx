import React, { Component } from 'react';
class Weather extends Component {
	state = {};

	render() {
		const { name, temp, humidity, main, weather, message } = this.props.weatherCondition;
		return (
			<div>
				<h1>Weather</h1>
				<div>
					<h2>{name}</h2>
					<label>温度</label>
					<input type="text" value={`${temp == null ? '' : temp}  `} />
					<label>湿度 </label>
					<input type="text" value={`${humidity == null ? '' : humidity}`} />
					<label>{main == null ? '' : main.temp}</label>
					<label>{weather == null ? '' : weather.haze}</label>
					<div />
					<strong>{message}</strong>
				</div>
			</div>
		);
	}
}

export default Weather;
