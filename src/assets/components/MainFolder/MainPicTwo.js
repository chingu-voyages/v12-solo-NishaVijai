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
					<a className="link" href="https://vaersgo.dk/gavekort" target="_blank" rel="noopener  noreferrer">
						<img
							className="black-image"
							src={require('../../../assets/images/MainPicTwo/Koeb_gavekort_567x63.jpg')}
							alt=""
						/>
					</a>
				</div>

				<div className="main-pic-two-left white-background">
					<a className="link" href="https://vaersgo.dk" target="_blank" rel="noopener  noreferrer">
						<img
							className="prod-image"
							src={require('../../../assets/images/MainPicTwo/desig_letters.jpg')}
							alt=""
						/>
					</a>
				</div>

				<div className="main-pic-two-right white-background">
					<a className="link" href="https://vaersgo.dk" target="_blank" rel="noopener  noreferrer">
						<img
							className="prod-image"
							src={require('../../../assets/images/MainPicTwo/Grod_broste.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
