import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@radix-ui/themes/styles.css";
import App from './App';
import { Theme } from '@radix-ui/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);

