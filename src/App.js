import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NotFoundRoute,  
  Route,
  Switch,
  Link
}from 'react-router-dom';


// components
import Header from './components/headerComponent/header';
import UpButton from './components/uppButton';
import AccountModal from './components/accountModal';
import HomePage from './components/pages/homePage';
import BlogPage from './components/pages/blogPage';
import PostPage from './components/pages/postPage';
import TermsPage from './components/pages/termsPage';
import ErrorPage from './components/pages/errorPage';
import Footer from './components/footerComponent/footer';



// includes
import './assets/css/main.min.css';


class App extends Component {
  
  render() {
    return (
      
    <Router>      
      <div className="App">
      <UpButton/> 
      <AccountModal/> 
      
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog/post/1" component={PostPage} />
        <Route exact path="/terms" component={TermsPage} />
        <Route component={ErrorPage} />
        </Switch>
        
        
        
      <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
