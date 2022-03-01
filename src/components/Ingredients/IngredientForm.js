import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ userInput1: number1, userInput2: number2,userInput3:number3,userInput4:number4,userInput5:number5 });
    props.onHamm({ userInput1: number1, userInput2: number2,userInput3:number3,userInput4:number4,userInput5:number5 });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="userInput1" >Number 1</label>
            <input
            placeholder="First number"
              type="number"
              id="number1"
              value={number1}
              onChange={event => {
                setNumber1(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="userInput2" >Number 2</label>
            <input
              type="number"
              id="number2"
              placeholder="Second number"
              value={number2}
              onChange={event => {
                setNumber2(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="userInput3" >Number 3</label>
            <input
            placeholder="Third number"
              type="number"
              id="number3"
              value={number3}
              onChange={event => {
                setNumber3(event.target.value);
              }}
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="userInput4" >Number 4</label>
            <input
            placeholder="Fourth number"
              type="number"
              id="number4"
              value={number4}
              onChange={event => {
                setNumber4(event.target.value);
              }}
            />
          </div>
         
          <div className="form-control">
            <label htmlFor="userInput5" >Number 5</label>
            <input
            placeholder="Fifth number"
              type="number"
              id="number5"
              value={number5}
              onChange={event => {
                setNumber5(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Compute Hamming Distance</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
