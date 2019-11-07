import React from 'react';

export class MainJulepynt extends React.Component {
	render() {
		return (
			<div className="main-single-grid-container white-background">
				<div className="main-julepynt">
					<a
						className="link"
						href="https://vaersgo.dk/masser_af_julepynt"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<img
							className="black-image"
							src={require('../../../assets/images/MainJulepynt/julepynt.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
