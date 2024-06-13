import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
//import Aboutus from './components/Aboutus';//
import Textcom from './components/Textcom';
import Alert from './components/Alert';


function App() {
 
  const [mode, setMode] = useState("white")
  const [blBtn, setBlbtn] = useState('Enable Dark Blue Mode')
  const [grBtn, setGrbtn] = useState('Enable Dark Green Mode')
  const [myAlert, setAlert] = useState(null)

  const showAlert = (message, type)=>{

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 2000);
  }

  const blueMode = ()=>{
    if(blBtn ==="Enable Dark Blue Mode" && (mode === "green" || mode === "white"))
      {
        setMode("blue");
        setBlbtn('Enable Light Mode')
        document.body.style.backgroundColor = 'rgb(5 23 42)';
        showAlert("Dark Blue Mode Enabled", "success");
      }
      
      else if(grBtn === "Enable Light Mode" && (mode === "blue" || mode === "green"))
        {
            setMode("green");
            setBlbtn('Enable Dark Blue Mode')
            document.body.style.backgroundColor = 'rgb(22 53 26)';
            showAlert("Dark Green Mode Enabled", "success");
        }
      else
        {
          setMode("white");
          setBlbtn('Enable Dark Blue Mode')
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode Enabled", "success");
        }
  }

  const grnMode = ()=>{
    if(grBtn === "Enable Dark Green Mode" && (mode==="blue" || mode === "white"))
      {
        setMode("green");
        setGrbtn('Enable Light Mode')
        document.body.style.backgroundColor = 'rgb(22 53 26)';
        showAlert("Dark Green Mode Enabled", "success");
      }
    
    else if(blBtn === "Enable Light Mode" && (mode === "green" || mode === "blue"))
      {
          setMode("blue");
          setGrbtn('Enable Dark Green Mode')
          document.body.style.backgroundColor = 'rgb(5 23 42)';
          showAlert("Dark Blue Mode Enabled", "success");
      }
      else
        {
          setMode("white");
          setBlbtn('Enable Dark Green Mode')
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode Enabled", "success");
        }
      
  }
  return( 
    <>
      <Navbar title = "TextuTils" mode = {mode} toggleMode1 = {blueMode} toggleMode2 = {grnMode} myButton1 = {blBtn} myButton2 = {grBtn}/>
      <Alert myAlert = {myAlert} showAlert = {showAlert}/>
      
      <div className='container my-4'>
      
          <Textcom heading = 'Enter Your Text Here' mode = {mode} myAlert= {myAlert} showAlert = {showAlert}></Textcom> 
          
      </div>
      

    </>
  );
}

export default App;
