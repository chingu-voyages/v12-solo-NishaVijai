import React from 'react';

import { CloneApp } from './assets/components/CloneApp';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBasket);

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<CloneApp />
				</div>
			</div>
		);
	}
}

export default App;
