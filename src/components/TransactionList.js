import React, {useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';




export const TransactionList = (props) => {
  const { transactions } = useContext(GlobalContext);

  
    
    return (
      <div style={{width:"90%", margin:"5%"}}>
        <ul className="list" >
       { transactions.map(transaction => (
      props.MesName === transaction.mes ?
       <Transaction key={transaction.id} transaction={transaction} /> : null
       ))  }
        </ul>
    
      </div>
  
    )
  

}


  
  
 
