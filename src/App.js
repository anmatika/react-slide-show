import React, { Component } from 'react';
import { Container } from 'reactstrap';
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
          <h1 className="App-title">Organic Slide Show</h1>
          <Container>
            <SliderDemo />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
