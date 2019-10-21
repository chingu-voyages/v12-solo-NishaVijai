import React from 'react';

export class FooterBrev extends React.Component {
	render() {
		return (
			<div>
				<form action="https://vaersgo.dk/newsletter/subscriber/new/" target="_blank" method="post">
					<div className="footerbrev-container">
						<div>
							<label for="newsletter">nyhedsbrev</label>
						</div>

						<div>
							<input
								className="input-name"
								placeholder="Navn"
								type="text"
								id="name"
								name="name"
								title="Navn"
							/>

							<input
								className="input-email"
								required
								placeholder="Din e-mail adresse"
								type="email"
								id="email"
								name="email"
								title="Din e-mail adresse"
							/>

							<input
								className="input-postnumber"
								placeholder="Postnummer"
								type=""
								id="postnumber"
								name="postnumber"
								title="Postnummer"
							/>
						</div>

						<div>
							<button type="sumbit" title="Tilmeld">
								tilmeld
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
