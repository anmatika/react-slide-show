import React, { Component } from 'react';
import { Container } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderDemo from './Components/SliderDemo';
import './App.css';
import './Slider.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            The OS Kittens Slideshow
            <FontAwesomeIcon className="ml-2" icon={faHeart} />
          </h1>
          <Container>
            <SliderDemo />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
