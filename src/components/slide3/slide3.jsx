import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

// images
import Older from '../../assets/img/slide3/old.png';




class Slide3 extends Component {
  render() {
    return (
     <div className="slide3 page">
        <div className="slide3__wrapper page-wrapper">
            <img src={Older} alt="Older" className="slide3__img"/>
            <span className="slide3__title">One more thing...</span>
            <span className="slide3__subt">Кэшбэк комиссий<br/>со сделок!</span>
            <p className="slide3__text">Вы инвестируете, часть<br/>комиссий Вам возвращается. <br/><br/>
Возврат комиссий пока<br/>
Ваши деньги работают. </p>    
        </div>
     </div>
    );
  }
}


export default Slide3;
