import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// images
import Logo from '../../assets/img/footer/logo.png';
import Attention from '../../assets/img/footer/attention.png';




class Footer extends Component {
  render() {
    return (
     <footer className="page">
      <div className="footer__wrapper page-wrapper">
        <div className="footer__row">
            <div className="footer__inf">
                <img src={Logo} alt="" className="footer__logo"/>
                <div className="footer__col">
                    <span className="footer__text">Консалтинговая компания</span>
                    <span className="footer__text">ООО «Инвест-профайл»</span>
                    <span className="footer__text">© 2016-2018 год</span>                      
                </div>
            </div>
            <div className="footer__col">
                <span className="footer__text">Телефон: <a className="footer__phone" href="tel:88003012406">8 800 301 2406</a></span>
                <span className="footer__text">E-mail: <a className="footer__email" href="email:info@invest-profile.ru ">info@invest-profile.ru </a></span>

            </div>
            <div className="footer__col">
                <span className="footer__text"><a href="" className="footer__email">Политика обработки<br/>персональных данных </a></span>
            </div>
            <div className="footer__col">
                <span className="footer__text"><Link to="/terms" className="footer__email">Пользовательское<br/>соглашение </Link></span>
            </div>
            <div className="footer__col">
                <span className="footer__text">Мы в социальных сетях:</span>
                <div className="footer__soc-links">
                    <div className="footer__soc"><i className="icon-telegram"></i></div>
                    <div className="footer__soc"><i className="icon-fb"></i></div>
                    <div className="footer__soc"><i className="icon-vk"></i></div>
                    <div className="footer__soc"><i className="icon-youtube"></i></div>

                </div>
            </div>


        </div>
        <div className="footer__leg">
            <img src={Attention} alt="" className="footer__att"/>
            <p className="footer__leg-text">Напоминаем Вам и просим быть предельно внимательными при инвестировании на финансовые рынки! Данные мероприятия несут в себе риски потери инвестированных средств, как частично, так и полностью. Инвестировать необходимо осознано и через лицензированных поставщиков финансовых услуг. </p>

        </div>

      
       </div>
     </footer>
    );
  }
}

export default Footer;
