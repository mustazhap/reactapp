import React, { Component } from 'react';


class SidebarHashtag extends Component {
  render() {
    return (
        <div className="sidebar sidebar__hashtag">
          <span className="sidebar__title">Популярные темы</span>
          <div className="sidebar__hashtag-block">
            <span className="sidebar__hastag-el">#Мир</span>
            <span className="sidebar__hastag-el">#Труд</span>
            <span className="sidebar__hastag-el">#Май</span>
            <span className="sidebar__hastag-el">#Ленин</span>
            <span className="sidebar__hastag-el">#Коммунизм</span>
            <span className="sidebar__hastag-el">#СССР</span>
            <span className="sidebar__hastag-el">#Сталин</span>
            <span className="sidebar__hastag-el">#КарлМаркс</span>
            
          
          </div>
        
             
        </div>
    );
  }
}

export default SidebarHashtag;
