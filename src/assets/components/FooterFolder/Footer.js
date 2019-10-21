import React from 'react';
import '../../stylesheets/footer.css';

import { FooterBrev } from '../FooterFolder/FooterBrev';
import { FooterNavigation } from '../FooterFolder/FooterNavigation';
import { FooterSocial } from '../FooterFolder/FooterSocial';

export class Footer extends React.Component {
	render() {
		return (
			<div>
				<div>
					<FooterBrev />
				</div>

				<div>{/* <FooterNavigation /> */}</div>

				<div>{/* <FooterSocial /> */}</div>
			</div>
		);
	}
}
