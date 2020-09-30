import React from 'react';
// added my own flavor of stonks.
// i like keeping all these functions seperate in different components
function Home(props) {
    console.log('this is Home - props', props);
    return ( <>
    <img src='https://i.kym-cdn.com/entries/icons/facebook/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg' />
    <h1>Welcome to the Home of Stocks...iStonks...</h1>
    </>)
}

export default Home;
