// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';

import './app/global.css';
import { store } from './app/store';
import { MUITheme } from './app/theme';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MUIThemeProvider theme={MUITheme}>
        <AppRoutes />
      </MUIThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
