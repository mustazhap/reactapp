import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import $ from 'jquery';


// images
import Logo from '../../assets/img/header/logo.png';
import Profile from '../../assets/img/header/profile.png';

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
    var viz = false;
    
    $("#userPush").click(function() {
      var $element = $("#pushModal");
      if ($element.is(':visible')) {
        $element.fadeOut();
    } else {
        $element.css("display", "grid").hide().fadeIn();
        viz = true;
    }
    });

    $("#regButton").click(function() {
      var $element = $("#reg");
      if ($element.is(':visible')) {
        $element.fadeOut();
    } else {
        $element.css("display", "grid").hide().fadeIn();
        viz = true;
    }
    });

    $("#loginButton").click(function() {
      var $element = $("#login");
      if ($element.is(':visible')) {
        $element.fadeOut();
    } else {
        $element.css("display", "grid").hide().fadeIn();
        viz = true;
    }
    });
    $(document).mouseup(function(e) {
      var container = $("#pushModal");
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
          container.fadeOut();
      }
    });
    $(document).mouseup(function(e) {
      var container = $("#reg");
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
          container.fadeOut();
      }
    });
    $(document).mouseup(function(e) {
      var container = $("#login");
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
          container.fadeOut();
      }
    });

    
  });

 




class Header extends Component {
  render() {
    return (
     <header className="page">
      <div className="header__wrapper page-wrapper">
      <div className="header__col">
        <Link to="/" className="header__logo"><img src={Logo} alt=""/></Link>
        <nav className="header__nav">
          <Link to="/blog" className="header__nav-link"><span className="header__nav-item">Блог</span></Link>
          <Link to="" className="header__nav-link"><span className="header__nav-item">Команда</span></Link>
          <Link to="" className="header__nav-link"><span className="header__nav-item">Партнеры</span></Link>
        </nav>
      </div>
      <div className="user">
        <div className="user__info">
          <span className="user__name">Стас</span>
          <a href="" className="user__exit"><i className="icon-exit"></i></a>
        </div>

        <img id="userPush" className="user__img" src={Profile} alt=""/>
        <div className="user__push"></div>
        

        </div>
         

         {/* <div className="user__notauth">
          <span id="regButton" className="user__n-text">Регистрация</span>
          <span id="loginButton" className="user__n-text">Вход</span>
          
         </div> */}
       </div>
     </header>
    );
  }
}

export default Header;
