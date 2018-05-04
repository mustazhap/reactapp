import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// images
import Spaceman from '../../assets/img/slide1/spaceman.png';
import Rocket from '../../assets/img/slide1/rocket.png';




class Slide1 extends Component {
  render() {
    return (
     <div className="slide1 page">
      <div className="slide1__wrapper page-wrapper">
        <img src={Spaceman} alt="Spaceman" className="slide1__spaceman"/>
        <div className="slide1__block">
            <span className="slide1__title">Ваш Инвестиционный профиль</span>
            <span className="slide1__subtitle">Безопасный старт на инвестиционном рынке</span>
        <div className="slide1__row">
            <button className="button"><img src={Rocket} className="button__img" alt="Rocket"/> Старт</button>
        </div>
        </div>
       </div>
     </div>
    );
  }
}

export default Slide1;
