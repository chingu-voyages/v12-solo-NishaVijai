import React from 'react';
import '../../stylesheets/main.css';

import { MainForside } from '../MainFolder/MainForside';
import { MainPicTwo } from '../MainFolder/MainPicTwo';
import { MainPicThree } from '../MainFolder/MainPicThree';
import { MainMere } from '../MainFolder/MainMere';
import { MainPicScroll } from '../MainFolder/MainPicScroll';
import { MainPicCollection } from '../MainFolder/MainPicCollection';
import { MainMarker } from '../MainFolder/MainMarker';
import { MainPink } from '../MainFolder/MainPink';
export class Main extends React.Component {
	render() {
		return (
			<div>
				<div>
					<MainForside />
				</div>

				<div>
					<MainPicTwo />
				</div>

				<div>
					<MainPicThree />
				</div>

				<div>
					<MainMere />
				</div>

				<div>
					<MainPicScroll />
				</div>

				<div>{/* <MainPicCollection /> */}</div>

				<div>
					<MainMarker />
				</div>

				<div>
					<MainPink />
				</div>
			</div>
		);
	}
}
