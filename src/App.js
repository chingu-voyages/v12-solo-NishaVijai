import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { CloneApp } from './assets/components/CloneApp';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faShoppingBasket);
class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
				<div>
					<CloneApp />
				</div>
			</div>
		);
	}
}

export default App;
