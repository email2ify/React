import React from 'react'

function EventFunctional() {
   function ClickHandler(){
    console.log("Click me Functional statement")
   } 
  return (
    <div><button onClick={ClickHandler}>Click me Stateless or Functional statement</button></div>
  )
}

export default EventFunctional
