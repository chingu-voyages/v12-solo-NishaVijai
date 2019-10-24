import React from 'react';

export class MainMarker extends React.Component {
	render() {
		return (
			<div className="main-marker-container">
				<div className="main-marker-left">
					<h2>vores mærker</h2>
					<p className="text-padding-bottom">
						I <span className="main-marker-caps">værsgo</span> er vi stolte af at kunne præsentere en række
						designmærker af helt særlig karakter. De udmærker sig hver især ved at stå bag produkter i en
						designklasse helt for sig selv. Her finder du ikke kun moderne designs, der er helt fremme i
						trenden, men også en række designikoner fra nogle af Danmarks og Skandinaviens største
						designere.
					</p>
					<p>
						Enkelte af disse mærker findes kun i udvalgte butikker - alle varerne kan naturligvis også
						shoppes lige her på{' '}
						<a
							className="main-marker-link"
							href="https://vaersgo.dk/"
							target="_blank"
							rel="noopener  noreferrer"
						>
							værsgo.dk
						</a>
					</p>
				</div>

				<div className="main-marker-left">
					<a className="link" href="https://vaersgo.dk/maerker" target="_blank" rel="noopener  noreferrer">
						<img
							className="title-logo"
							src={require('../../../assets/images/MainMarker/brands.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}