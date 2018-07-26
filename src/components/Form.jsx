import React, { Component } from 'react';

class Search extends Component {
    state = {  }

    render() { 
        const {getWeather}=this.props;
        return (
            <div>
                <form onSubmit={getWeather}>
                    <input  type="text" name="city"/>
                    <input  type="text" name="country"/>
                    <button >查询</button>
                </form>
            </div>
          );
    }
}
 
export default Search;
