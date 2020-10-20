import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = (props) => {
  const { transactions } = useContext(GlobalContext);
 
  
  
    const amounts = transactions.map(transaction => (
      props.MesName === transaction.mes ? transaction.amount : null));
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return  <>
    <center><h4 style={{ fontSize:"15px", fontWeight: "bold"}}>Balance del mes</h4></center>
    <center><h1 style={{ color:"#4a65a3", fontWeight: "bold" }}>${total}</h1></center>
    </>
  
  
}

