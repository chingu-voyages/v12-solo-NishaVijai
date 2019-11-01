import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-brands-svg-icons';
export class FooterSocial extends React.Component {
	render() {
		return (
			<div className="footer-social-container">
				<div className="footer-social-first">
					<img
						className="copyright-image"
						src={require('../../images/FooterSocial/footer-cards.png')}
						alt=""
					/>
				</div>

				<div className="vertical-line" />

				{/* <div className="footer-social-second">
					<img
						className="copyright-image"
						src={require('../../images/FooterSocial/footer-e-maerket.png')}
						alt=""
					/>
				</div>

				<div className="vertical-line" /> */}

				<div className="footer-social-third">
					<a
						className="pinterest social"
						href="https://www.pinterest.com/pin/250723904243042217/"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<FontAwesomeIcon className="social-icon" icon={Icons.faPinterest} />
					</a>
					<a
						className="facebook social"
						href="https://www.facebook.com/vaersgodk"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<FontAwesomeIcon className="social-icon" icon={Icons.faFacebook} />
					</a>

					<a
						className="instagram social"
						href="https://www.instagram.com/vaersgodk/"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<FontAwesomeIcon className="social-icon" icon={Icons.faInstagram} />
					</a>
				</div>
			</div>
		);
	}
}
