import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AddTransaction = (props) => {


  
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      mes:props.MesName,
      text:text,
      amount: +amount
    
  }
    // alert('Registro Añadido')

       addTransaction( newTransaction )
   
    //e.target.reset()
  }

  return (

    <>
    <div style={{ background:"#E5E7E9" , borderRadius:"20px", margin:"0px", padding: "0px", height:"100%", paddingBottom:"10px", width:"100%"}}>
    <div style={{width:"80%", margin:"30px"}}>
    <center> <form onSubmit={onSubmit}>
      <div >
      <br/>
  <span style={{fontWeight: "bold"}}>Concepto</span><br/>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." autoFocus/>
      </div>
      <div ><br/>


      <span style={{fontWeight: "bold"}}>(Ingresos o Gastos)</span><br/>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
      </div><br /><br />


  <button type="submit" className="btn" style={{background:"#DAC93F", color:"#fff"}}>AÑADIR</button>

    </form></center>
    </div>
    </div>
  </>
   
  )
}
