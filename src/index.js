import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Montserrat'],
  },
  timeout: 2000,
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
