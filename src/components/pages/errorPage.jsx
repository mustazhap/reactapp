import React, { Component } from 'react';

// images
import Error404 from '../../assets/img/error.png';





class ErrorPage extends Component {
  render() {
    return (
        <section className="postPage page">
        <div className="postPage__wrapper errorPage page-wrapper">
            <div className="postItem ">
                <img src={Error404} alt="Page not found" className="errorPage-img"/>
                <span className="post__body-h1 errorPage-text">
                ОЙ! Что-то пошло не так.<br/>
                Страницу котору вы запрашивы<br/>
                мы не смогли найти =(
                </span>

            </div>
        
             </div>
        </section>
    );
  }
}

export default ErrorPage;
