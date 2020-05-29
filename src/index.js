import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/font/rimouski_sb-webfont.ttf';
import './assets/font/rimouski_sb-webfont.woff';
import './assets/font/rimouski_sb-webfont.woff2';

const context = require.context('./assets/icons/', false, /\.(png|jpe?g|svg)$/);
const iconCache = {}

context.keys().forEach(key => {
  const iconId = key.split('./').pop().substring(0, key.length - 6);
  iconCache[iconId] = context(key);
});

export default iconCache;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
