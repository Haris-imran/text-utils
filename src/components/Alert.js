import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>
        {
            let cpt = word.toLowerCase();
            return cpt.charAt(0).toUpperCase() + cpt.slice(1);
        }
    
    
  return (
        props.myAlert && <div className={`alert alert-${props.myAlert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.myAlert.type)}! </strong>{props.myAlert.msg}
        </div>
      
  )
}
