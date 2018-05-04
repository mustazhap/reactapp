import React, { Component } from 'react';

// images
import Boy from '../../assets/img/slide4/boy.png';




class Slide4 extends Component {
  render() {
    return (
     <div className="slide4 page">
        <div className="slide4__wrapper page-wrapper">
            <span className="slide4__title">Отчего зависит успешность инвестора на финансовых рынках?</span>
            <div className="slide4__row">
                <img src={Boy} alt="Boy" className="slide4__img"/>
                <p className="slide4__text">Успешность инвестора напрямую зависит от знания своего Инвестиционного профиля. Ведь результатом инвестиций может быть не только прибыль, но и при поспешных и не обдуманных шагах возможны сокращения доходов и даже убытки. Имея на руках свой Инвестиционный Профиль, инвестор заранее оберегает себя от большинства возможных рисков при инвестировании.</p>
            </div>
    
        </div>
     </div>
    );
  }
}

export default Slide4;
