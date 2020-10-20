
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meses from './Meses';
import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
         <>
          <GlobalProvider> 
          <Meses/>
          </GlobalProvider>
         </>
  );
}

export default App;


