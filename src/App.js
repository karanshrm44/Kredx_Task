import React, { Component } from 'react';
import Deal from './container/Deal/Deal';
import Invoice from './container/Invoice/Invoice';
import './App.css';

class App extends Component {
  constructor()
  { super();
   this.state={
    isLoad:true,
    
  }
}

  handleChange=()=>{
    let x=!this.state.isLoad;
    this.setState({
      isLoad:x
    })
  }
  


  render() {
   
    return (
      <div className="box">
          <p className="top">Kredx Deal Creation</p>
          <div className="App">
          {
              this.state.isLoad? <Deal clicked={()=>this.handleChange()} />
              : <Invoice  clicked={()=>this.handleChange()} />
            }
          </div>
      </div>
    );
  }
}

export default App;
