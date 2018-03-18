import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import fetch from 'isomorphic-fetch';
import App from '../src/components/App';
import configureStore from '../src/store/configureStore';
import history from '../src/history';

require('@babel/register');

const req = require.context('../src/components', true, /\.story\.js$/);
function loadStories() {
  console.error('~~~~~~~', req.keys());
  req.keys().forEach(filename => req(filename));
}

const context = {
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
  store: configureStore({}),
  fetch,
  pathname: history.location.pathname,
};

addDecorator(story => (
  <App context={context}>
    <div id="app">{story()}</div>
  </App>
));

configure(loadStories, module);
