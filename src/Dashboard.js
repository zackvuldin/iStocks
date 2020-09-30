import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
	console.log(props);
	let stockData = props.stockData.map((stock, index) => {
		return (
			<Link key={index} to={`/stocks/${stock.name}`}>
				<li>{stock.name}</li>
			</Link>
		);
	});
	return <ul>{stockData}</ul>;
}

export default Dashboard;
