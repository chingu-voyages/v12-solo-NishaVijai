import React from 'react';
export class HeaderTop extends React.Component {
	render() {
		return (
			<div className="header-top-container">
				<div className="header-top-left">
					<p>fri fragt ved køb over 300,- / fragt 30,-</p>
					<p>levering 1-5 hverdage på lagervarer</p>
				</div>

				<div className="header-top-right">
					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/bytteservice"
						target="_blank"
						rel="noopener  noreferrer"
					>
						byt 30 dage i butik
					</a>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/prismatch"
						target="_blank"
						rel="noopener  noreferrer"
					>
						prismatch
					</a>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/aktuelle-kataloger"
						target="_blank"
						rel="noopener  noreferrer"
					>
						se aktuelle kampagner
					</a>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/butik"
						target="_blank"
						rel="noopener  noreferrer"
					>
						find butik
					</a>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/gavekort"
						target="_blank"
						rel="noopener  noreferrer"
					>
						gavekort
					</a>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/kontakt-os"
						target="_blank"
						rel="noopener  noreferrer"
					>
						kundeservice
					</a>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/customer/account/login/"
						target="_blank"
						rel="noopener  noreferrer"
					>
						log ind
					</a>

					<span>/</span>

					<a
						className="header-top-right-link"
						href="https://vaersgo.dk/customer/account/create/"
						target="_blank"
						rel="noopener  noreferrer"
					>
						opret
					</a>
				</div>
			</div>
		);
	}
}
