import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import WebFont from 'webfontloader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: [
      'Quicksand:400,700',
      'Open Sans:300,400,700',
      'Titillium Web:700'
    ]
  }
});

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
