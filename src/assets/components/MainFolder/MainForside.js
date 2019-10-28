import React from 'react';
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
						<img
							className="main-image"
							src={require('../../../assets/images/MainForside/julepynt_prc_.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
