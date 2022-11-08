import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.scss';
import 'normalize.css';
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';
import ProviderContext from 'LoadingContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProviderContext>
);
