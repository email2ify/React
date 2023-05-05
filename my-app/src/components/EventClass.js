import React, { Component } from 'react'

export class EventClass extends Component {
    clickHandler(){
        console.log("Click me Class Function")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me Class Funtion</button>
      </div>
    )
  }
}

export default EventClass