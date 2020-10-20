import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state
const initialState = {
  transactions:[]
  
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  
  //Despues de importar AppReducer lo conecto con GlobalState aqui en esta linea 
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }



  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    
    });
  }


  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    mes:[
      {id: 1, title: 'Enero'},
      {id: 2, title: 'Febrero'},
      {id: 3, title: 'Marzo'},
      {id: 4, title: 'Abril'},
      {id: 5, title: 'Mayo'},
      {id: 6, title: 'Junio'},
      {id: 7, title: 'Julio'},
      {id: 8, title: 'Agosto'},
      {id: 9, title: 'Septiembre'},
      {id: 10, title: 'Octubre'},
      {id: 11, title: 'Noviembre'},
      {id: 12, title: 'Diciembre'}
    ]
  }}>
    {children}
  </GlobalContext.Provider>);
}