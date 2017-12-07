import React from 'react';
import { render } from 'mirrorx';
import { AppContainer } from 'react-hot-loader';
// import Root from './containers/Root';
import Root from './routes';
import { /* configureStore, */ history } from './store/configureStore';
import './app.global.css';

// const store = configureStore();

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoot = require('./routes'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
