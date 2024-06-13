import React, {useState} from 'react'

export default function Textcom(props) {



  const upClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("converted to upper case", "success");
  }
  const loClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
 }
 const clrClick = ()=>{
  let newText = "";
  setText(newText);
  props.showAlert("text cleared", "success");
}

  const handleUp = (event)=>{
    console.log("onChange");
    setText(event.target.value)

 }
  const [text, setText] = useState("");
  return (
    <>
      
        <div className= {`mb-3 text-${props.mode === 'white'?'dark': 'white'}`} >
        <h1 >{props.heading}</h1>
        <textarea className="form-control" id="Box" rows="6" value = {text} onChange = {handleUp} ></textarea>
        
        <button className='btn btn-outline-success my-3 mx-1' onClick={upClick}  >Convert to  Upper case</button>
        <button className='btn btn-outline-success my-3 mx-1' onClick={loClick} >Convert to Lower case</button>
        <button className='btn btn-outline-success my-3 mx-1' onClick={clrClick}>Clear</button>
        


        <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters and {text.split(".").length - 1} sentences</p>
      <h3>Preview</h3>
      <p>{text}</p>

     </div>
    

    <div>
      
      
    </div>
    </>
  )
}
