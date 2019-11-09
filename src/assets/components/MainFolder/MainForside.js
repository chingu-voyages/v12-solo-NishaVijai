import React from 'react';
import { MainMere } from '../MainFolder/MainMere';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
export class MainForside extends React.Component {
	render() {
		return (
			<div className="main-forside-container">
				<div className="main-forside-text">
					<p>Forside</p>
					<MainMere />
				</div>

				<div className="main-forside-pic">
					<a className="link" href="https://vaersgo.dk/tilbud" target="_blank" rel="noopener  noreferrer">
						<img
							class="lazyload"
							src="https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif"
							data-sizes="auto"
							data-src={require('../../../assets/images/MainForside/20_prc_paa_alt_banner_1.jpg')}
							alt=""
						/>
					</a>
				</div>
			</div>
		);
	}
}
