import React from 'react';
import '../../stylesheets/header.css';

import { HeaderTop } from '../HeaderFolder/HeaderTop';
import { HeaderTitle } from '../HeaderFolder/HeaderTitle';
import { HeaderNavigation } from '../HeaderFolder/HeaderNavigation';
export class Header extends React.Component {
	render() {
		return (
			<div>
				<div>
					<HeaderTop />
				</div>

				<div>
					<HeaderTitle />
				</div>

				<div>
					<HeaderNavigation />
				</div>
			</div>
		);
	}
}
