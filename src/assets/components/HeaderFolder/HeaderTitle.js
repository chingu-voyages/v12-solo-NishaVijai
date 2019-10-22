import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class HeaderTitle extends React.Component {
	render() {
		return (
			<div className="header-title-container">
				<div className="HeaderTitleMiddle">
					<a className="link" href="https://vaersgo.dk/" target="_blank" rel="noopener  noreferrer">
						<img
							className="title-logo"
							src={require('../../../assets/images/HeaderTitle/logo.png')}
							alt=""
						/>
					</a>
				</div>

				<div className="HeaderTitleRight">
					<button className="title-shopping-cart">
						<b>
							indkøbskurv{' '}
							<span className="basket-icon">
								<FontAwesomeIcon icon="shopping-basket" />
							</span>{' '}
							(0)
						</b>
					</button>
				</div>
			</div>
		);
	}
}
