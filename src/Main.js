import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import stockData from './stock-data';

// instead of adding all into App, i had it in main instead.
function Main(props) {
	console.log('Main', props);
	return (
		<main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route
					path='/stocks/:name'
					render={(props) => <Stock stockData={stockData} {...props} />}
				/>
				<Route
					path='/stocks'
					render={(props) => <Dashboard {...props} stockData={stockData} />}
				/>
			</Switch>
		</main>
	);
}
// routing to the API database from finance was hard. couldnt get it to be put here
export default Main;
