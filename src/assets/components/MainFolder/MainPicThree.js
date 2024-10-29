import React from 'react';
// import PicData from './PicData';
import { PicData } from './PicData';

import rosen from '../../images/MainPicThree/rosen.jpg';
import kniv from '../../images/MainPicThree/kniv.jpg';
import vase from '../../images/MainPicThree/vase.png';
import keramikVase from '../../images/MainPicThree/keramikVase.jpg';
import sengetoej from '../../images/MainPicThree/sengetoej.png';
import pande from '../../images/MainPicThree/pande.jpg';
export class MainPicThree extends React.Component {
  state = {
    picDescription: [
      {
        url: rosen,
        href: 'https://vaersgo.dk/iphone-cover-l',
        name: 'rosendahl grand cru kaffekop 26 cl',
        price: '160,00',
        spar: '40,00',
        buttonText: 'læg i kurv'
      },
      {
        url: kniv,
        href: 'https://vaersgo.dk/kop-med-underkop-28-cl-hvid-riflet',
        name: 'zwilling knivmagnet prof',
        price: '320,00',
        spar: '80,00',
        buttonText: 'læg i kurv'
      },
      {
        url: vase,
        href: 'https://vaersgo.dk/easy-whip-floedesifon',
        name: 'lyngby porcelæn curve vase h12 cm',
        price: '240,00',
        spar: '60,00',
        buttonText: 'læg i kurv'
      },
      {
        url: keramikVase,
        href: 'https://vaersgo.dk/sort-riflet-tallerken-oe22-cm',
        name: 'knabstrup keramik vase h20 cm',
        price: '280,00',
        spar: '70,00',
        buttonText: 'læg i kurv'
      },
      {
        url: sengetoej,
        href: 'https://vaersgo.dk/river-vase-26-cm',
        name: 'juna sengetøj okker 140x200 cm',
        price: '440,00',
        spar: '110,00',
        buttonText: 'læg i kurv'
      },
      {
        url: pande,
        href: 'https://vaersgo.dk/river-vase-26-cm',
        name: 'eva trio stegepande ø20 cm',
        price: '480,00',
        spar: '120,00',
        buttonText: 'læg i kurv'
      }
    ]
  };

  render() {
    return (
      <div className="main-grid-three-container">
        {this.state.picDescription.map((picDesc) => <PicData key={picDesc.url} picDesc={picDesc} />)}
      </div>
    );
  }
}
