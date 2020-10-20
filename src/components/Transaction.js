import React, {useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import moment from "moment"
import 'moment/locale/es';
import '../App.css';



export const Transaction = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  const { deleteTransaction } = useContext(GlobalContext);


    const sign = props.transaction.amount < 0 ? '-' : '+';
    const nbsp = '\u00A0\u00A0';
     moment.locale('es');

  return (
    <>

      <h6 style={{fontWeight:"bold"}}>{moment().calendar() }</h6>
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className={props.transaction.amount < 0 ? 'minus' : 'plus'}> 
      <DropdownToggle caret  style={{borderRadius:"10px", background:"#fff", color:"#000", width:"90%"}} size="lg"
      >
      <span style={{fontWeight:"bold"}}>{props.transaction.text}</span>
       {nbsp} 
       <span style={sign === '+' ? {color:"blue"} : {color:"red"} }>{sign}${Math.abs(props.transaction.amount)}</span>

        </DropdownToggle>


      <DropdownMenu>
        <DropdownItem onClick={() => deleteTransaction(props.transaction.id)} className="Eliminar" >
          Eliminar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </>
  )

  
}