import React from 'react'

const Footer = ({items}) => {
    const calculateChecks=()=>{
      const Check=items.filter((item)=>item.checked===true).length;
      return Check
    }
    const calculateUnchecks=()=>{
      const unCheck=items.filter((item)=>item.checked===false).length;
      return unCheck
    }
  return (
    <footer>
      Completed:{calculateChecks()} |
      Uncompleted:{calculateUnchecks()}
    
    </footer>
  )
}

export default Footer