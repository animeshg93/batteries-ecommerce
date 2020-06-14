import React from 'react';
import Banner from './components/Banner'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'
import ProductPage from './components/ProductPage'
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
  	<>
	  	<Banner />
	  	<BrowserRouter>
		    <Route path="/batteries" component={AllProducts} exact/>
		    <Route path="/batteries/:id" component={ProductPage} />
	    </BrowserRouter>
    </>
  );
}

export default App;
