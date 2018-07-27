import React, { Component } from 'react';

class Search extends Component {
	state = {};

	render() {
		const { getWeather } = this.props;
		return (
			<div>
				<form onSubmit={getWeather}>
					<input type="text" name="city" placeholder="City" />
					<input type="text" name="country" placeholder="Country" />
					<button type="submit" className="btn btn-outlinde-default">
						查询
					</button>
				</form>
			</div>
		);
	}
}

export default Search;
