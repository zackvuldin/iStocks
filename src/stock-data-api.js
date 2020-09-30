import React, { useState } from 'react';

// throw away file to test pulling from API database of live stock numbers.
const [stockData, setStockData] = useState({});

// the link works and everything, i just didnt know how to connect it all.
const getStock = (props) => {
	fetch(
		`https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=5489254c756b625f8d9256b2a8ee7f1a`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setStockData(data);
		});
};
// trying to get the stock price
React.useEffect(() => {
	getStock('price');
}, []);

const handleSubmit = (props) => {
	getStock(props);
};

// 	return (
// 		<div className='App'>
// 			<Form handleSubmit={handleSubmit} />
// 			<StockInfo stockData={stockData} />
// 		</div>
// 	);
// }

export default getStock