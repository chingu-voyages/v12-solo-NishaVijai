import React from 'react';

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import React, { Suspense } from 'react';

// const LazyLoadForside = React.lazy(() => import('./ForsideImage'));
export class MainForside extends React.Component {
	render() {
		return (
			<div className="main-forside-container">
				<div className="main-forside-text">
					<p>Forside</p>
				</div>

				<div className="main-forside-pic">
					{/* <Suspense fallback="Loading...">
						<LazyLoadForside />
					</Suspense> */}
					<a
						className="link"
						href="https://vaersgo.dk/spar_paa_jul"
						target="_blank"
						rel="noopener  noreferrer"
					>
						{/* <img
							class="lazy"
							src="placeholder.jpg"
							data-src={require('../../../assets/images/MainForside/julepynt_prc_.jpg')}
							alt=""
						/> */}
						{/* <img
							className="main-image"
							src={require('../../../assets/images/MainForside/julepynt_prc_.jpg')}
							alt=""
						/> */}
						<img
							class="lazyload"
							src="https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif"
							data-sizes="auto"
							data-src={require('../../../assets/images/MainForside/julepynt_prc_.jpg')}
							alt=""
						/>
						{/* <img
							data-sizes="auto"
							data-src={require('../../../assets/images/MainForside/julepynt_prc_.jpg')}
							data-srcset="{require('../../../assets/images/MainForside/julepynt_prc_.jpg')} 300w,
							{require('../../../assets/images/MainForside/julepynt_prc_.jpg')} 600w,
							{require('../../../assets/images/MainForside/julepynt_prc_.jpg')} 900w"
							class="lazyload"
							alt=""
						/> */}
					</a>
				</div>
			</div>
		);
	}
}
