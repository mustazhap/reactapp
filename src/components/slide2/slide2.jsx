import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// images
import User1 from '../../assets/img/slide2/user1.png';
import User2 from '../../assets/img/slide2/user2.png';
import User3 from '../../assets/img/slide2/user3.png';





class Slide2 extends Component {
  render() {
    return (
     <div className="slide2 page">
        <div className="slide2__wrapper page-wrapper">
            <div className="slide2__block">
                <span className="slide2__title">О чем речь?</span>
                <p className="slide2__descr">
                    Мы разработали тест для определения вашего инвестиционного профиля. Результат тест поможет вам правильно выбрать продукты на рынке ценных бумаг сответствующие вашему риск профилю.
                </p>
                <span className="slide2__ul">Что вы получите после прохождения теста?</span>
                <span className="slide2__li">Узнаете свой болевой порог риска;</span>
                <span className="slide2__li">Приобретете положительный опыт, а не отрицательный (только 
	проверенные компании);</span>
                <span className="slide2__li">Действительно лучшие продукты для Вас;</span>
                <span className="slide2__li">Максимально обезопасите себя на рынке инвестиций.</span>
            </div>
            <div className="slide2__blue-block">
                <span className="slide2__blue-title">Кому необходим<br/>Инвестиционный профиль?</span>
                <div className="slide2__blue-row">
                    <div className="slide2__blue-col">
                        <img src={User1} alt="User1" className="slide2__blue-img"/>
                        <span className="slide2__blue-alt">Новичку на финансовых рынках</span>
                    </div>
                    <div className="slide2__blue-col">
                        <img src={User2} alt="User2" className="slide2__blue-img"/>
                        <span className="slide2__blue-alt slide2__blue-alt_cent">Опытному инвестору</span>
                    </div>
                    <div className="slide2__blue-col">
                        <img src={User3} alt="User3" className="slide2__blue-img"/>
                        <span className="slide2__blue-alt">Разочарованные в финансовых рынках</span>
                    </div>
                </div>

            </div>
        
        </div>
     </div>
    );
  }
}

export default Slide2;
