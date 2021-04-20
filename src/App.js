import React, {Component} from 'react';
import './App.css';
import { Button } from './components/Button';
import { ClearButton } from './components/ClearButton';
import { Input } from './components/Input';
import { Operand } from './components/Input';
import * as math from "mathjs";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      operand: "",
      sum: "",
      lastClick: ""
    };
  }

/* add button checks for previous inputs and adds number to sum */
  addToInput = val => {
    if(this.state.lastClick === '1' || 
    this.state.lastClick === '2' ||
    this.state.lastClick === '3' ||
    this.state.lastClick === '4' ||
    this.state.lastClick === '5' || 
    this.state.lastClick === '6' ||
    this.state.lastClick === '7' ||
    this.state.lastClick === '8' ||
    this.state.lastClick === '9' ||
    this.state.lastClick === '0' ||
    this.state.lastClick === '.'
    )
      {
        this.setState({input: this.state.input + val});
      }else{
        this.setState({input: val});
      }

    this.setState({sum: this.state.sum + val});
    this.setState({lastClick: val});
  }

  /* Divide button checks for previous inputs and adds divide to sum */
  addDivideToInput = val => {
    if(this.state.lastClick !== '-' 
    && this.state.lastClick !== '+' 
    && this.state.lastClick !== 'x' 
    && this.state.lastClick !== '÷' 
    && this.state.lastClick !== 'CLR'  
    && this.state.lastClick !== null)  {


      this.setState({lastClick: val});
      this.setState({sum: this.state.sum + "/"});
      this.setState({operand: "÷"})
    }

    this.setState({lastClick: val});
  }
/* times button checks for previous inputs and adds times to sum */
  addTimesToInput = val => {
    if(this.state.lastClick !== '-' 
    && this.state.lastClick !== '+' 
    && this.state.lastClick !== 'x' 
    && this.state.lastClick !== '÷' 
    && this.state.lastClick !== 'CLR' 
    && this.state.lastClick !== null)  {
   
      this.setState({lastClick: val});
      this.setState({sum: this.state.sum + "*"});
      this.setState({operand: "x"})
    }

    this.setState({lastClick: val});
  }
/* addition button checks for previous inputs and adds addition to sum */
  addAdditionToInput = val => {
    if(this.state.lastClick !== '-' 
    && this.state.lastClick !== '+' 
    && this.state.lastClick !== 'x' 
    && this.state.lastClick !== '÷' 
    && this.state.lastClick !== 'CLR'  
    && this.state.lastClick !== null)  {
    
      this.setState({lastClick: val});
      this.setState({operand: "+"})
      this.setState({sum: this.state.sum + "+"});
    }
    this.setState({lastClick: val});
  }
/* minus button checks for previous inputs and adds minus to sum */
  addMinusToInput = val => {
    if(this.state.lastClick !== '-' 
    && this.state.lastClick !== '+' 
    && this.state.lastClick !== 'x'
    && this.state.lastClick !== '÷' 
    && this.state.lastClick !== 'CLR'  
    && this.state.lastClick !== null)  {

 
      this.setState({lastClick: val});
      this.setState({operand: "-"})
      this.setState({sum: this.state.sum + "-"});
    }
    this.setState({lastClick: val});
  }
/* equals button checks for previous inputs and calculates sum */
  handleEqual = () => {
    if(this.state.lastClick !== '-' 
    && this.state.lastClick !== '+' 
    && this.state.lastClick !== 'x' 
    && this.state.lastClick !== '÷'  
    && this.state.lastClick !== '='
    && this.state.lastClick !== 'CLR'
    && this.state.lastClick !== null)  {
      let value = "=";    
      
      this.setState({lastClick: value});
      this.setState({ input: math.evaluate(this.state.sum) });
      this.setState({operand: ""});
      this.setState({sum: math.evaluate(this.state.sum)})
      this.setState({lastClick: value});
      
    } 

  };

  render() {
  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="row">
        <Operand operand={this.state.operand}></Operand>
        <Input input={this.state.input }></Input>
        </div> 
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addDivideToInput}>÷</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addTimesToInput}>x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addMinusToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({sum: "",input: "0", operand: "", lastClick: "CLR"})}>CLR</ClearButton>
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addAdditionToInput}>+</Button>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
