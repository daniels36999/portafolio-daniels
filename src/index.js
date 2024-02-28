import React from 'react';
import ReactDOM from 'react-dom';
import { App, AppFooter } from './jsx/App';

import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <AppFooter />
  </React.StrictMode>,
  document.getElementById('root2')
);