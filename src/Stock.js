import React from 'react';
// hard coded data, but i really tried to get the API database from financial modeling prep stocks.
const Stock = (props) => {
	console.log('Stock - props', props);
	const stock = props.stockData.filter(
		(stock) => stock.name === props.match.params.name
	)[0];
	console.log('Stock - stock', stock);
	return (
		<div>
			<h3>Name: {stock.name}</h3>
			<h3 className='price'>Price: {stock.lastPrice}</h3>
		</div>
	);
};

export default Stock;
