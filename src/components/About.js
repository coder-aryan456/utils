import React, { useState } from 'react'

export default function About() {

    const [mystyle , setmystyle]=useState({
        backgroundColor: 'black',
        color:'white'
    })
    let newstyle ={
        backgroundColor: 'lightblue'
    }
    let handleclick=()=>{
      if(mystyle.backgroundColor==='black'){
        setmystyle({
            backgroundColor:'grey'
        })
      

        }
        else{
            setmystyle({
                color:'white',
                backgroundColor:'black'
            })
        }
      }
    
  return (
   
    <div className="container" >
      <div class="accordion" id="accordionExample" style={mystyle}>
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header">
      <button class="accordion-button" style={newstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={newstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={newstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button class="btn btn-primary me-md-2 my-3"   onClick={handleclick} type="button">press to switch the color</button>
    </div>
  )
}
