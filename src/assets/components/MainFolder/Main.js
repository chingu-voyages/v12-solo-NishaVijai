import React from 'react';
import '../../stylesheets/main.css';

import { MainForside } from '../MainFolder/MainForside';
import { MainPicTwo } from '../MainFolder/MainPicTwo';
import { MainPicThree } from '../MainFolder/MainPicThree';
import { MainMere } from '../MainFolder/MainMere';
import { SlideShow } from '../MainFolder/SlideShow';
import { MainPicCollection } from '../MainFolder/MainPicCollection';
import { MainMarker } from '../MainFolder/MainMarker';
import { MainPink } from '../MainFolder/MainPink';
import { MainJulepynt } from '../MainFolder/MainJulepynt';
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

				<div>{/* <MainMere /> */}</div>

				<div>
					<SlideShow />
				</div>

				<div>{/* <MainPicCollection /> */}</div>

				<div>{/* <MainMarker /> */}</div>

				<div>{/* <MainPink /> */}</div>

				<div>
					<MainJulepynt />
				</div>
			</div>
		);
	}
}
