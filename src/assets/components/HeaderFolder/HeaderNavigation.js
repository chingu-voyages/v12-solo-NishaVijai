import React from 'react';
export class HeaderNavigation extends React.Component {
	render() {
		return (
			<div className="header-navigation-container">
				<div className="thin-border-line" />
				<div className="header-nav">
					<nav className="nav-container">
						<ul className="nav-container-grid">
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/bolig"
									target="_blank"
									rel="noopener  noreferrer"
								>
									bolig
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/moebler"
									target="_blank"
									rel="noopener  noreferrer"
								>
									møbler
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/seng-bad"
									target="_blank"
									rel="noopener  noreferrer"
								>
									seng & bad
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/bord"
									target="_blank"
									rel="noopener  noreferrer"
								>
									bord
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/koekken"
									target="_blank"
									rel="noopener  noreferrer"
								>
									køkken
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/nyevarer"
									target="_blank"
									rel="noopener  noreferrer"
								>
									aktuelt
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/maerker"
									target="_blank"
									rel="noopener  noreferrer"
								>
									mærker
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/nyheder"
									target="_blank"
									rel="noopener  noreferrer"
								>
									nyheder
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/tilbud"
									target="_blank"
									rel="noopener  noreferrer"
								>
									tilbud
								</a>
							</li>
						</ul>
					</nav>

					<div className="nav-search">
						<label for="search">søg:</label>
					</div>
				</div>
			</div>
		);
	}
}
