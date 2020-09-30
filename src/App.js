import React from 'react';
import Header from './Header';
import Main from './Main';
import stockData from './stock-data';
// import { Link, Route } from "react-router-dom";



function App(props) {

  console.log('this is App props: ', props)
// put everything in Main instead of all into App
  return (
    <div className="App">
      <Header />
      <Main stockData={stockData} />
    </div>
  );
}
// content

export default App;
