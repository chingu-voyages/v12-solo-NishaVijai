import React from 'react';

export class MainPicColData extends React.Component {
	render() {
		return (
			<div className="main-pic-collection-list">
				<div className="spar-button" />
				<img src={this.props.picColDesc.url} alt="" onClick={() => this.props.picColDesc.href} />
				<h4> {this.props.picColDesc.name} </h4>
				<h2> {this.props.picColDesc.price} </h2>
				<p>Spar: {this.props.picColDesc.spar} </p>
				<button> {this.props.picColDesc.buttonText} </button>
			</div>
		);
	}
}
