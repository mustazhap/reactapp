import React, { Component } from 'react';

// components
import SidebarHashtag from '../SidebarHashtag/SidebarHashtag';
import SidebarPost from '../SidebarPost/SidebarPost';
import Post from '../post/Post';







class BlogPage extends Component {
  render() {
    return (
        <section className="blog page">
        <div className="blog__wrapper page-wrapper">
        <div className="blog__body">
          <Post />
          <Post />
          <Post />
          <Post />

          <div className="show-more">Загрузить еще</div>
          
        </div>
        <div className="blog__side">
            <SidebarHashtag />
            <SidebarPost />
            
        </div>
        </div>
             
        </section>
    );
  }
}

export default BlogPage;
