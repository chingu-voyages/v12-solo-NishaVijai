import React from 'react';
export class PicData extends React.Component {
	render() {
		return (
			<div className="pic-data-container">
				<div className="spar-button" />
				<img src={this.props.picDesc.url} alt="" onClick={() => this.props.picDesc.href} />
				<h4> {this.props.picDesc.name} </h4>
				<h2> {this.props.picDesc.price} </h2>
				<p>Spar: {this.props.picDesc.spar} </p>
				<button> {this.props.picDesc.buttonText} </button>
			</div>
		);
	}
}
