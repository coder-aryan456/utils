import React, { useState } from 'react'

export default function TextForm() {
    const handleclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const clear=()=>{
        let newtext="";
        setText(newtext);
    }
    const handleonchage=(Event)=>{
       setText(Event.target.value);
    }
    const [mystyle , setmystyle]=useState({
        backgroundColor: 'black',
        color:'white'
    })
    const handleclick2=()=>{
        if(mystyle.backgroundColor==='black'){
          setmystyle({
              backgroundColor:'white'
          })
        
  
          }
          else{
              setmystyle({
                  color:'white',
                  backgroundColor:'black'
              })
          }
        }
    const [text, setText] = useState('enter the text');
    return (
        <div>
            <div class="container"  >

                <textarea id="w3review" style={mystyle} name="w3review" value={text} onChange={handleonchage} rows="8" cols="170">
                    how are yhou
                </textarea>
                <button class="btn btn-primary me-md-2 my-3"   onClick={handleclick} type="button">press to conver to uppercase</button>
                <button class="btn btn-primary me-md-2 my-3"   onClick={clear} type="button">clear text</button>
                <button class="btn btn-primary me-md-2 my-3"   onClick={handleclick2} type="button">press to change</button>
            </div>

        </div>
    )
}
