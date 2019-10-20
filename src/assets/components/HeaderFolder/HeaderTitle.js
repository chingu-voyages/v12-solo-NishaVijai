import React from 'react';

export class HeaderTitle extends React.Component {
	render() {
		return (
			<div>
				<div className="HeaderTitleMiddle">
					<img className="title-logo" src={require('../../../assets/images/logo.png')} alt="" />
				</div>

				<div className="HeaderTitleRight">
					<button className="title-shopping-cart">indkøbskurv (0)</button>
				</div>
			</div>
		);
	}
}
