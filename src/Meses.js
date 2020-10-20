
import React, {useState, useContext} from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
 import { AddTransaction } from './components/AddTransaction';
 import { GlobalContext } from './context/GlobalState';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


function Meses() {

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      const { mes, transactions } = useContext(GlobalContext); 
      const [text, setText] = useState('');

  return (
     
      text !== transactions.mes ?
        <div className="container" style={{ background:"#E5E7E9" , borderRadius:"20px", margin:"0px", padding: "0px", height:"50%", paddingBottom:"100%", maxWidth:"100%", position:"relative"}}>
        
        <div className="Header">
        {mes.map(item =>  
       <div className="obj"  key={item.id}>    
       <button className="obj"  onClick={() => setText(item.title)}>{item.title}</button>  
          </div>
        )}
      </div>
        <div style={{background:"#fff", borderRadius:"20px", width:"90%", margin:"5%", marginTop:"20px"}}>
   <Balance   MesName={text}/>
   <IncomeExpenses  MesName={text} /> 
   </div>  
   <TransactionList MesName={text}/>
         <div  style={{width:"60%", position: "fixed", top:"500px",  bottom:"0px", left:"20%", right:"0%"
}}>
             <Button color="danger" onClick={toggle} style={{width:"100%", background:"#86a5ff", color:"#fff"}}>Agregar Movimiento</Button>
             <Modal isOpen={modal} toggle={toggle} className="container">
                  <ModalHeader toggle={toggle} style={{paddingLeft:"30%"}}>Nueva Transacción</ModalHeader>
                   <ModalBody>
                       <AddTransaction  MesName={text}/>
                   </ModalBody>
            </Modal>
        </div>
    </div> :
      transactions.map(transaction => (
        text === transaction.mes ? 
      <div className="container" style={{ background:"#E5E7E9" , borderRadius:"20px", margin:"0px", padding: "0px", height:"50%", paddingBottom:"100%", maxWidth:"100%", position:"relative"}}>
        
      <div className="Header">
      {mes.map(item =>  
     <div className="obj"  key={item.id}>    
     <button onClick={() => setText(item.title)}> {item.title}</button>  
        </div>
      )}
    </div>
      <div style={{background:"#fff", borderRadius:"20px", width:"90%", margin:"5%", marginTop:"20px"}}>
 <Balance   MesName={transaction.mes}/>
 <IncomeExpenses  MesName={transaction.mes} /> 
 </div>  
 <TransactionList MesName={transaction.mes}/>
       <div  style={{width:"60%", position: "fixed", top:"500px",  bottom:"0px", left:"20%", right:"0%"
}}>
           <Button color="danger" onClick={toggle} style={{width:"100%", background:"#86a5ff", color:"#fff"}}>Agregar Movimiento</Button>
           <Modal isOpen={modal} toggle={toggle} className="container">
                <ModalHeader toggle={toggle} style={{paddingLeft:"30%"}}>Nueva Transacción</ModalHeader>
                 <ModalBody>
                     <AddTransaction  MesName={transaction.mes}/>
                 </ModalBody>
          </Modal>
      </div>
  </div> :null
    ))
  );
}

export default Meses;


