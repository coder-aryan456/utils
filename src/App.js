
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// eslint-disable-next-lin
import { Route, Routes} from 'react-router-dom';
function App() {
  let check=true
  const [mode, setmode]=useState('dark');
  let toggle=()=>{
    check=true;
     if(mode==='dark') {
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert('light mode has enables')
     }
     else{
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert('dark mode has enables')
     }
  }
  const [newmode, setmode2]=useState('green');
  let toggle2=()=>{
     check=false;
    if(newmode==='green')
    {
      setmode2('red')
    }
    else {
      setmode2('green')
    }
  }
   const [alert,setalert]=useState(null);
   const showalert=(message)=>{
    setalert({
      msg:message
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
     
   }
  return (
    <>
      <Navbar title="textutils" cond={check} newmode={newmode} mode={mode} toggle2={toggle2} togle={toggle} />
      <Alert alert= {alert} />
    
      <Routes>
       <Route>
       <Route path="/about" element={<About />} />
       </Route>
     
        <Route>
        <Route path="/" element={  <TextForm/>} />
        </Route>
        
      </Routes>
   

    </>
  );
}

export default App;
