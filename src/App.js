/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Routes from './routes';
import GlobalStyles from './Shared/GlobalStyles';

function App() {
  smoothscroll.polyfill();

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
