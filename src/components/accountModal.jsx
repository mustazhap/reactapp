import React, { Component } from 'react';
import $ from 'jquery';


import Profile from '../assets/img/header/profile.png';





class AccountModal extends Component {
  render() {
    return (
        <div>
    <div id="pushModal" className="page">
        <div className="modal__triangle page-wrapper"></div>    
     <div className="modal page-wrapper">
        <span className="modal__title">Уведомления</span>
        <div className="modal__body">
            <div className="modal__item">
                <img src={Profile} alt="" className="modal__img"/>
                <div className="modal__col">
                    <span className="modal__push"><b>Роман Кичан</b>ответил на ваш комментарий к статье <b>«Мошенники на финансовых рынках...»</b></span>
                    <span className="modal__date">11 февраля 2009 в 15:42</span>
                </div>
            </div>

            <div className="modal__item">
                <img src={Profile} alt="" className="modal__img"/>
                <div className="modal__col">
                    <span className="modal__push"><b>Роман Кичан</b>ответил на ваш комментарий к статье <b>«Мошенники на финансовых рынках...»</b></span>
                    <span className="modal__date">11 февраля 2009 в 15:42</span>
                </div>
            </div>

            <div className="modal__item">
                <img src={Profile} alt="" className="modal__img"/>
                <div className="modal__col">
                    <span className="modal__push"><b>Роман Кичан</b>ответил на ваш комментарий к статье <b>«Мошенники на финансовых рынках...»</b></span>
                    <span className="modal__date">11 февраля 2009 в 15:42</span>
                </div>
            </div>

            <div className="modal__item">
                <img src={Profile} alt="" className="modal__img"/>
                <div className="modal__col">
                    <span className="modal__push"><b>Роман Кичан</b>ответил на ваш комментарий к статье <b>«Мошенники на финансовых рынках...»</b></span>
                    <span className="modal__date">11 февраля 2009 в 15:42</span>
                </div>
            </div> 
            <div className="modal__item">
                <img src={Profile} alt="" className="modal__img"/>
                <div className="modal__col">
                    <span className="modal__push"><b>Роман Кичан</b>ответил на ваш комментарий к статье <b>«Мошенники на финансовых рынках...»</b></span>
                    <span className="modal__date">11 февраля 2009 в 15:42</span>
                </div>
            </div> 
            <div className="modal__item">
                <img src={Profile} alt="" className="modal__img"/>
                <div className="modal__col">
                    <span className="modal__push"><b>Роман Кичан</b>ответил на ваш комментарий к статье <b>«Мошенники на финансовых рынках...»</b></span>
                    <span className="modal__date">11 февраля 2009 в 15:42</span>
                </div>
            </div> 
        </div>
        </div>
     </div>

    <div id="reg" className="page">
    <div className="modal__triangle page-wrapper"></div>    
    <div className="modal page-wrapper">
    <span className="modal__title">Регистрация</span>
    <div className="modal__body">
        <div className="modal__row">
            <span className="modal__label">Имя:</span>
            <input type="text" className="modal__input"/>        
        </div>
        <div className="modal__row">
            <span className="modal__label">Фамилия:</span>
            <input type="text" className="modal__input"/>        
        </div>
        <div className="modal__row">
            <span className="modal__label">E-mail:</span>
            <input type="text" className="modal__input"/>        
        </div>
        <div className="modal__row">
            <span className="modal__label">Пароль:</span>
            <input type="password" className="modal__input"/>        
        </div>
        <div className="modal__row">
            <button className="button">Зарегистрироваться</button>
        </div>
        
    </div>
    </div>
    </div>

    <div id="login" className="page">
    <div className="modal__triangle page-wrapper"></div>    
    <div className="modal page-wrapper">
    <span className="modal__title">Вход</span>
    <div className="modal__body">
        <div className="modal__row">
            <span className="modal__label">E-mail:</span>
            <input type="text" className="modal__input"/>        
        </div>
        <div className="modal__row">
            <span className="modal__label">Пароль:</span>
            <input type="password" className="modal__input"/>        
        </div>
        <div className="modal__row"><button className="button">Войти в аккаунт</button></div>
    </div>
    </div>
    </div>
    </div>
    );
  }
}

export default AccountModal;
