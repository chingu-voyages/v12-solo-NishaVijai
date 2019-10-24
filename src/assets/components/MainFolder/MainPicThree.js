import React from 'react';

export class MainPicThree extends React.Component {
	render() {
		return (
			<div className="main-grid-three-container">
				<div>
					<ul className="main-pic-three-images">
						<li className="first-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/hammershoei-skjuler-18-5-cm-8923"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/bowl.jpg')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<h4>Design</h4>
								<h2>Price: 240</h2>
								<p>Spar: 60</p>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="second-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/iphone-cover-d"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/mobile-cover.png')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<h4>Design</h4>
								<h2>Price: 240</h2>
								<p>Spar: 60</p>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="third-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/melamin-bestik"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/white-cutlery.png')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<h4>Design</h4>
								<h2>Price: 240</h2>
								<p>Spar: 60</p>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="fourth-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/wave-trio-3-stk"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/floor-lamp.jpg')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<h4>Design</h4>
								<h2>Price: 240</h2>
								<p>Spar: 60</p>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="fifth-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/termoflaske-350-ml-15128"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/love-flask.png')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<h4>Design</h4>
								<h2>Price: 240</h2>
								<p>Spar: 60</p>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="sixth-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/boernebestik-groen"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/gray-cutlery.png')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<h4>Design</h4>
								<h2>Price: 240</h2>
								<p>Spar: 60</p>
								<button>læg i kurv</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
