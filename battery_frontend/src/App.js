import React from 'react';
import Banner from './components/Banner'
import AllBatteries from './components/AllBatteries'
import BatteryPage from './components/BatteryPage'
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
  	<>
	  	<Banner />
	  	<BrowserRouter>
		    <Route path="/batteries" component={AllBatteries} exact/>
		    <Route path="/batteries/:id" component={BatteryPage} />
	    </BrowserRouter>
    </>
  );
}

export default App;
