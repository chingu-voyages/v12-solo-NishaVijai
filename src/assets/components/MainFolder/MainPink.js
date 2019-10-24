import React from 'react';

export class MainPink extends React.Component {
	render() {
		return (
			<div className="main-grid-container">
				<div className="main-pink-left white-background">
					<a
						className="link"
						href="https://vaersgo.dk/insta-favoritter"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<img
							className="pink-image"
							src={require('../../../assets/images/MainPink/Insta_favoritter_til_2_koloner_r.jpg')}
							alt=""
						/>
					</a>
				</div>

				<div className="main-pink-right white-background">
					<a
						className="link"
						href="https://vaersgo.dk/hotte-maerker"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<img
							className="pink-image"
							src={require('../../../assets/images/MainPink/Hotte_Maerker_flame_til_2_koloner_r.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
