import React from 'react';

export class MainPicTwo extends React.Component {
	render() {
		return (
			<div className="main-grid-container">
				<div className="main-pic-two-left white-background">
					<a className="link" href="https://vaersgo.dk/butik" target="_blank" rel="noopener  noreferrer">
						<img
							className="black-image"
							src={require('../../../assets/images/MainPicTwo/Find_butik_567x63.jpg')}
							alt=""
						/>
					</a>
				</div>

				<div className="main-pic-two-right white-background">
					<a className="link" href="https://vaersgo.dk/tilbud" target="_blank" rel="noopener  noreferrer">
						<img
							className="black-image"
							src={require('../../../assets/images/MainPicTwo/Se_tilbud_sort.jpg')}
							alt=""
						/>
					</a>
				</div>

				<div className="main-pic-two-left white-background">
					<a className="link" href="https://vaersgo.dk/koekken" target="_blank" rel="noopener  noreferrer">
						<img
							className="prod-image"
							src={require('../../../assets/images/MainPicTwo/k_kken.jpg')}
							alt=""
						/>
					</a>
				</div>

				<div className="main-pic-two-right white-background">
					<a className="link" href="https://vaersgo.dk/sengogbad" target="_blank" rel="noopener  noreferrer">
						<img
							className="prod-image"
							src={require('../../../assets/images/MainPicTwo/Seng_og_bad.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
