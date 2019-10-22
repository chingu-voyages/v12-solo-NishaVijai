import React from 'react';
import '../stylesheets/cloneApp.css';

import { Header } from '../components/HeaderFolder/Header';
import { Main } from '../components/MainFolder/Main';
import { Footer } from '../components/FooterFolder/Footer';

export class CloneApp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Header />
				</div>

				<div>
					<Main />
				</div>

				<div>
					<Footer />
				</div>
			</div>
		);
	}
}
