import React from 'react';

// function based component
// const picData = (props) => {
// 	return <p>Price: {props.price} </p>;
// };
// export default picData;

// Class-based component
export class PicData extends React.Component {
	render() {
		return (
			<div>
				<h4> {this.props.name} </h4>
				<h2> {this.props.price} </h2>
				<p>Spar: {this.props.spar} </p>
			</div>
		);
	}
}
