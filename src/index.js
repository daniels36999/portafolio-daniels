import React from 'react';
import ReactDOM from 'react-dom';
import * as funciones from './jsx/App';

import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <funciones.App/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <funciones.AppFooter/>
  </React.StrictMode>,
  document.getElementById('root2')
);
