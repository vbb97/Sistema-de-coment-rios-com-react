import React from 'react';
import ReactDOM from 'react-dom/client';
import All from './components/All';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <All />
  </React.StrictMode>
);
