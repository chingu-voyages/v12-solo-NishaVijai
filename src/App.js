// import React from 'react';
import React, { Suspense } from 'react';

import { CloneApp } from './assets/components/CloneApp';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBasket);

// const LazyLoadApp = React.lazy(() => import('./assets/components/CloneApp'));
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					{/* <Suspense fallback={<div>"Loading..."</div>}>
						<LazyLoadApp />
					</Suspense> */}
					<CloneApp />
				</div>
			</div>
		);
	}
}

export default App;
