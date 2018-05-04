import React, { Component } from 'react';

// components
import Slide1 from '../slide1/slide1';
import Slide2 from '../slide2/slide2';
import Slide3 from '../slide3/slide3';
import Slide4 from '../slide4/slide4';





class HomePage extends Component {
  render() {
    return (
        <section className="pages">
          <Slide1/>
          <Slide2/>
          <Slide3/>
          <Slide4/>       
        </section>
    );
  }
}

export default HomePage;
