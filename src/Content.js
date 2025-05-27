import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Content = ({items,handleCheck,handleDelete}) => {
      

    return (
      <main>
        {(items.length)?
            <ul>
          {
          items.map((item)=>
            <li className='item' key={item.id}>
              <input 
                onChange={()=>handleCheck(item.id)}
                type="checkbox" 
                checked={item.checked} 
              />
              <label 
                onDoubleClick={()=>handleCheck(item.id)}
                style={(item.checked)?{textDecoration:"line-through",color:"grey"}:null}
              >{item.item}
              </label>
              <FaTrashAlt
                onClick={()=>handleDelete(item.id)}
                role='button'
                tabIndex="0"
              />
            </li>
            )
          }
        </ul>
      :<p style={{fontSize:"26px"}}>Your List is Empty</p>
        }
      
      </main>
    )
  
}

export default Content