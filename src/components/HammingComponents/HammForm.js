import React, { useState } from 'react';

import Card from '../UI/Card';
import './HammForm.css';

const HammForm = React.memo(props => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');
  const [number1Err, setNumber1Err] = useState(false);
  const [number2Err, setNumber2Err] = useState(false);
  const [number3Err, setNumber3Err] = useState(false);
  const [number4Err, setNumber4Err] = useState(false);
  const [number5Err, setNumber5Err] = useState(false);
  const isEnabled = number1.length > 0 && number2.length > 0 && number3.length >0 && number4.length > 0 && number5.length > 0 && number1Err === false && number2Err === false && number3Err === false && number4Err === false && number5Err === false ;

  

  function num1Handler(e){
    let item=e.target.value;
    if(item.length!==5 )
    {
      setNumber1Err(true)
    }
    else
    {
      setNumber1Err(false)
    }
    setNumber1(item)
}
  
function num2Handler(e){
  let item=e.target.value;
  if(item.length!==5 )
  {
    setNumber2Err(true)
  }
  else
  {
    setNumber2Err(false)
  }
  setNumber2(item)
}

function num3Handler(e){
  let item=e.target.value;
  if(item.length!==5 )
  {
    setNumber3Err(true)
  }
  else
  {
    setNumber3Err(false)
  }
  setNumber3(item)
}

function num4Handler(e){
  let item=e.target.value;
  if(item.length!==5 )
  {
    setNumber4Err(true)
  }
  else
  {
    setNumber4Err(false)
  }
  setNumber4(item)
}

function num5Handler(e){
  let item=e.target.value;
  if(item.length!==5 )
  {
    setNumber5Err(true)
  }
  else
  {
    setNumber5Err(false)
  }
  setNumber5(item)
}




  const submitHandler = event => {
    console.log(`Check for flag:${isEnabled}`)
    if(isEnabled){
      
      props.onAddHistory({ userInput1: number1, userInput2: number2,userInput3:number3,userInput4:number4,userInput5:number5 });
      props.onHamm({ userInput1: number1, userInput2: number2,userInput3:number3,userInput4:number4,userInput5:number5 });
    }
    else{
      alert('Please check your entries!')
    }
    event.preventDefault();
    
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <h1>Form for calculating Hamming Distance</h1>
            <p>Please enter 5 numbers each having 5 digits in order to compute the hamming distance between values.</p>
            <label htmlFor="userInput1" >Number 1</label>
            <input
            placeholder="First number"
              type="number"
              id="number1"
              value={number1}
              onChange={num1Handler}
            />
            {number1Err?<span className='errorField'>Please enter a valid 5 digit number</span>:""}
          </div>
          <div className="form-control">
            <label htmlFor="userInput2" >Number 2</label>
            <input
              type="number"
              id="number2"
              placeholder="Second number"
              value={number2}
              onChange={num2Handler}
            />
            {number2Err?<span className='errorField'>Please enter a valid 5 digit number</span>:""}
          </div>
          <div className="form-control">
            <label htmlFor="userInput3" >Number 3</label>
            <input
            placeholder="Third number"
              type="number"
              id="number3"
              value={number3}
              onChange={num3Handler}
            />
            {number3Err?<span className='errorField'>Please enter a valid 5 digit number</span>:""}
          </div>
          
          <div className="form-control">
            <label htmlFor="userInput4" >Number 4</label>
            <input
            placeholder="Fourth number"
              type="number"
              id="number4"
              value={number4}
              onChange={num4Handler}
            />
            {number4Err?<span className='errorField'>Please enter a valid 5 digit number</span>:""}
          </div>
         
          <div className="form-control">
            <label htmlFor="userInput5" >Number 5</label>
            <input
            placeholder="Fifth number"
              type="number"
              id="number5"
              value={number5}
              onChange={num5Handler}
            />
            {number5Err?<span className='errorField'>Please enter a valid number</span>:""}
          </div>
          <div className="ingredient-form__actions">
            <button type="submit" disabled={!isEnabled}>Compute Hamming Distance</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default HammForm;
