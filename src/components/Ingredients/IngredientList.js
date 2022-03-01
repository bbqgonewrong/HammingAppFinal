import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>History</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.userInput1}</span>
            <span>{ig.userInput2}</span>
            <span>{ig.userInput3}</span>
            <span>{ig.userInput4}</span>
            <span>{ig.userInput5}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
