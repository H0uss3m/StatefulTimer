import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Buttons from './buttons';
import './index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        ms:0,
        clickedbutton:false,
    }
    setInterval(
      ()=>{
        if(this.state.clickedbutton){
          this.setState({
              ms:this.state.ms+1000,
            })
      }
    },1000) 
  }
    
     count=()=>{
      this.setState({clickedbutton:!this.state.clickedbutton})
     }
         
    //       })}
    
    // count=() =>{
    //   timer=setInterval(()=>this.setState({ms:this.initialstate.ms+1000}),1000);
    //   this.setState({clickedbutton:!this.initialstate.clickedbutton})}
              
    // stopCount=()=>{
    //   clearInterval(timer);
    //   // timer=null
    //   this.setState({clickedbutton:!this.initialstate.clickedbutton})
    // }
    
   

    reset=()=>{
      return(this.setState({
        ms:0,
        clickedbutton:false,
      }))
    }
  render() {
    return (
     <div className='App'>
        <Timer ms={this.state.ms} />
        <Buttons clickedbutton={this.state.clickedbutton} reset={this.reset}  count={this.count}/>
     </div>
    );
  }
}
export default App;
