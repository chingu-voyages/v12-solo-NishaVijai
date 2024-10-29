import React from 'react';
import { MainPicColData } from './MainPicColData';

import phoneCover from '../../images/MainPicCollection/phoneCover.png';
import cup from '../../images/MainPicCollection/cup.jpg';
import whip from '../../images/MainPicCollection/whip.jpg';
import plate from '../../images/MainPicCollection/plate.jpg';
import vase from '../../images/MainPicCollection/vase.jpg';
import board from '../../images/MainPicCollection/board.jpg';
import glass from '../../images/MainPicCollection/glass.jpg';
import skål from '../../images/MainPicCollection/skål.jpg';
import hakker from '../../images/MainPicCollection/hakker.jpg';
import bedCover from '../../images/MainPicCollection/bedCover.jpg';
import ovenPlate from '../../images/MainPicCollection/ovenPlate.jpg';
import smallCup from '../../images/MainPicCollection/smallCup.jpg';
export class MainPicCollection extends React.Component {
  state = {
    picColDescription: [
      {
        url: phoneCover,
        href: 'https://vaersgo.dk/iphone-cover-l',
        name: 'design letters iphone cover l',
        price: '240,00',
        spar: '60,00',
        buttonText: 'læg i kurv'
      },
      {
        url: cup,
        href: 'https://vaersgo.dk/kop-med-underkop-28-cl-hvid-riflet',
        name: 'kop med underkop 28 cl hvid riflet',
        price: '200,00',
        spar: '50,00',
        buttonText: 'læg i kurv'
      },
      {
        url: whip,
        href: 'https://vaersgo.dk/easy-whip-floedesifon',
        name: 'isi easy whip flødesifon',
        price: '400,00',
        spar: '100,00',
        buttonText: 'læg i kurv'
      },
      {
        url: plate,
        href: 'https://vaersgo.dk/sort-riflet-tallerken-oe22-cm',
        name: 'r-c sort riflet tallerken ø22 cm',
        price: '200,00',
        spar: '50,00',
        buttonText: 'læg i kurv'
      },
      {
        url: vase,
        href: 'https://vaersgo.dk/river-vase-26-cm',
        name: 'morsø river vase 26 cm',
        price: '400,00',
        spar: '100,00',
        buttonText: 'læg i kurv'
      },
      {
        url: board,
        href: 'https://vaersgo.dk/create-me-bakke-12x24-cm',
        name: 'andersen create me bakke 12x24 cm',
        price: '200,00',
        spar: '50,00',
        buttonText: 'læg i kurv'
      },
      {
        url: glass,
        href: 'https://vaersgo.dk/highland-longdrink-glas-4-stk',
        name: 'nachtmann highland longdrink glas 4 stk',
        price: '240,00',
        spar: '60,00',
        buttonText: 'læg i kurv'
      },
      {
        url: skål,
        href: 'https://vaersgo.dk/blaa-elements-skaal-40-cl',
        name: 'royal copenhagen blåelements skål 40cl',
        price: '560,00',
        spar: '140,00',
        buttonText: 'læg i kurv'
      },
      {
        url: hakker,
        href: 'https://vaersgo.dk/multihakker-speedwing',
        name: 'gefu multihakker speedwing',
        price: '400,00',
        spar: '100,00',
        buttonText: 'læg i kurv'
      },
      {
        url: bedCover,
        href: 'https://vaersgo.dk/xess-seng-140x200-petrol',
        name: 'essenza xess seng 140x200 petrol',
        price: '440,00',
        spar: '110,00',
        buttonText: 'læg i kurv'
      },
      {
        url: ovenPlate,
        href: 'https://vaersgo.dk/ovnfast-fad-17x26-cm',
        name: 'le creuset ovnfast fad 17x26 cm',
        price: '272,00',
        spar: '68,00',
        buttonText: 'læg i kurv'
      },
      {
        url: smallCup,
        href: 'https://vaersgo.dk/salt-og-peberkar',
        name: 'rosendahl salt og peberkar',
        price: '200,00',
        spar: '50,00',
        buttonText: 'læg i kurv'
      }
    ]
  };

  render() {
    return (
      <div className="main-pic-collection-grid">
        {this.state.picColDescription.map((picColDesc) => <MainPicColData key={picColDesc.url} picColDesc={picColDesc} />)}
      </div>
    );
  }
}
