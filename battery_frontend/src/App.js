import React from 'react';
import Banner from './components/Banner'
import AllBatteries from './components/AllBatteries'
import BatteryPage from './components/BatteryPage'
import {BrowserRouter as Router,  Route} from 'react-router-dom'

function App() {
  return (
  	<Router>
	  	<Banner />
	  	<Route path="/batteries" component={AllBatteries} exact/>
		<Route path="/batteries/:id" component={BatteryPage} />
    </Router>
  );
}

export default App;
