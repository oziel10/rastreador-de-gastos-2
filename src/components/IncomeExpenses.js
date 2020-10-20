import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = (props) => {
  const { transactions } = useContext(GlobalContext);

  
  const amounts = transactions.map(transaction => (
    props.MesName === transaction.mes ? transaction.amount : null));
  
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  
 
    return <div className="inc-exp-container" style={{borderRadius:"10px", border:"0px solid",  boxShadow: "0px 0px  0px 0px"}}>
    <div>
      <h6>Ingresos</h6>
<h2 style={{ color:"green", fontWeight: "bold"}}>{income}</h2>
    </div>
    <div>
      <h6>Gastos</h6>
<h2 style={{ color:"red", fontWeight: "bold"}}>{expense}</h2>
    </div>
  </div>;
  




}


