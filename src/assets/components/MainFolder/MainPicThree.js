import React from 'react';
// import PicData from './PicData';
import { PicData } from './PicData';

export class MainPicThree extends React.Component {
	state = {
		picDescription: [
			{ name: 'rosendahl grand cru kaffekop 26 cl', price: '160,00', spar: '40,00' },
			{ name: 'zwilling knivmagnet prof', price: '320,00', spar: '80,00' },
			{ name: 'lyngby porcelæn curve vase h12 cm', price: '240,00', spar: '60,00' },
			{ name: 'knabstrup keramik vase h20 cm', price: '280,00', spar: '70,00' },
			{ name: 'juna sengetøj okker 140x200 cm', price: '440,00', spar: '110,00' },
			{ name: 'eva trio stegepande ø20 cm', price: '480,00', spar: '120,00' }
		]
	};

	render() {
		return (
			<div className="main-grid-three-container">
				<div>
					<ul className="main-pic-three-images">
						<li className="first-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/grand-cru-kaffekop-26-cl"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/rosen.jpg')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<PicData
									name={this.state.picDescription[0].name}
									price={this.state.picDescription[0].price}
									spar={this.state.picDescription[0].spar}
								/>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="second-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/knivmagnet-prof"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/kniv.jpg')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<PicData
									name={this.state.picDescription[1].name}
									price={this.state.picDescription[1].price}
									spar={this.state.picDescription[1].spar}
								/>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="third-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/curve-vase-h12-cm"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/vase.png')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<PicData
									name={this.state.picDescription[2].name}
									price={this.state.picDescription[2].price}
									spar={this.state.picDescription[2].spar}
								/>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="fourth-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/vase-h20-cm-5172"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/keramik-vase.jpg')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<PicData
									name={this.state.picDescription[3].name}
									price={this.state.picDescription[3].price}
									spar={this.state.picDescription[3].spar}
								/>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="fifth-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/monochrome-sengetoej-okker-140x200-cm"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/sengetoej.png')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<PicData
									name={this.state.picDescription[4].name}
									price={this.state.picDescription[4].price}
									spar={this.state.picDescription[4].spar}
								/>
								<button>læg i kurv</button>
							</div>
						</li>

						<li className="sixth-three-prod">
							<div className="three-grid-image">
								<a
									className="link"
									href="https://vaersgo.dk/stegepande-oe20-cm"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="main-pic-three-image"
										src={require('../../../assets/images/MainPicThree/pande.jpg')}
										alt=""
									/>
								</a>
							</div>

							<div className="three-grid-image-text">
								<PicData
									name={this.state.picDescription[5].name}
									price={this.state.picDescription[5].price}
									spar={this.state.picDescription[5].spar}
								/>
								<button>læg i kurv</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
