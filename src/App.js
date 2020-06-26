import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './themes/GlobalStyles';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
