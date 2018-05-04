import React, { Component } from 'react';


class SidebarPost extends Component {
  render() {
    return (
        <div className="sidebar sidebar__post">
          <span className="sidebar__title">Лучшие статьи за неделю</span>
          <div className="sidebar__item">
            <span className="sidebar__post-title">Карта выбора финансовых-инвестиционных продуктов</span>
            <span className="sidebar__post-date">11 февраля 2009</span>
          </div>
          <div className="sidebar__item">
            <span className="sidebar__post-title">Разбираем Доверительного управляющего (ДУ)</span>
            <span className="sidebar__post-date">Вчера в 13:15</span>
          </div>
          <div className="sidebar__item">
            <span className="sidebar__post-title">Разбираем Брокера</span>
            <span className="sidebar__post-date">Сегодня в 02.23</span>
          </div> 
        
             
        </div>
    );
  }
}

export default SidebarPost;
