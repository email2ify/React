import React, { Component } from 'react'

export class SearchBar extends Component {
    clickHandler(){
        console.log("")
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <form onSubmit={this.handleSubmit}>
                    <div>
                        
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            defaultValue="search names.."
                            ref={this.inputName}
                        />
                    </div>
                    <div style= {{margin: 'auto'}}>We will render names here</div>
        </form>
      </div>
      
    )
  }
}

export default SearchBar