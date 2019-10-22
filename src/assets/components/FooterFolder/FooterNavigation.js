import React from 'react';
export class FooterNavigation extends React.Component {
	render() {
		return (
			<div className="footer-navigation-container">
				<div className="footer-navigation-left">
					<img
						className="title-logo"
						src={require('../../../assets/images/FooterNavigation/footer-logo.png')}
						alt=""
					/>
					<address>VÆRSGO A/S - Østre Stationsvej 1 - 5000 Odense C</address>
					<p>
						Webshop tlf: <a href="tel:+0045 70 27 04 04">70 27 04 04</a>
					</p>
					<p>CVR: 38 83 38 98</p>
					<a
						className="footer-mail-link"
						href="mailto:webshop@vaersgo.dk"
						target="_blank"
						rel="noopener  noreferrer"
					>
						webshop@vaersgo.dk
					</a>
				</div>

				<div className="footer-navigation-right">
					<div className="footer-navigation-right-links first">
						<h5>
							<b>kundeservice</b>
						</h5>
						<ul>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/kontakt-os"
									target="_blank"
									rel="noopener  noreferrer"
								>
									kontakt
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/handelsbetingelser"
									target="_blank"
									rel="noopener  noreferrer"
								>
									handelsbetingelser
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/levering-og-forsendelse"
									target="_blank"
									rel="noopener  noreferrer"
								>
									levering
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/bytteservice"
									target="_blank"
									rel="noopener  noreferrer"
								>
									bytteservice
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/fortrydelsesret-returnering"
									target="_blank"
									rel="noopener  noreferrer"
								>
									fortrydelsesret
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/garanti-og-reklamation"
									target="_blank"
									rel="noopener  noreferrer"
								>
									garanti-og-reklamation
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/prismatch"
									target="_blank"
									rel="noopener  noreferrer"
								>
									prismatch
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-navigation-right-links second">
						<h5>
							<b>information</b>
						</h5>
						<ul>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/nyhedsbrev"
									target="_blank"
									rel="noopener  noreferrer"
								>
									nyhedsbrev
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/konkurrencer"
									target="_blank"
									rel="noopener  noreferrer"
								>
									konkurrencer
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/firmagaver"
									target="_blank"
									rel="noopener  noreferrer"
								>
									firmagaver
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/cookies-og-persondatapolitik"
									target="_blank"
									rel="noopener  noreferrer"
								>
									persondatapolitik
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/cookies-og-persondatapolitik"
									target="_blank"
									rel="noopener  noreferrer"
								>
									cookies
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/clubmatas"
									target="_blank"
									rel="noopener  noreferrer"
								>
									club matas
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/knivslibning"
									target="_blank"
									rel="noopener  noreferrer"
								>
									knivslibning
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-navigation-right-links third">
						<h5>
							<b>om værsgo</b>
						</h5>
						<ul>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/outlet"
									target="_blank"
									rel="noopener  noreferrer"
								>
									find butik
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/om-os"
									target="_blank"
									rel="noopener  noreferrer"
								>
									om os
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/job"
									target="_blank"
									rel="noopener  noreferrer"
								>
									job
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/firmaoplysninger"
									target="_blank"
									rel="noopener  noreferrer"
								>
									firmaoplysninger
								</a>
							</li>
							<li>
								<a
									className="header-nav-link"
									href="https://vaersgo.dk/presse"
									target="_blank"
									rel="noopener  noreferrer"
								>
									presse
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
