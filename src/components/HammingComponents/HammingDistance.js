import React, { useState } from 'react';
import Table from './Table';
import HammForm from './HammForm';
import HammingHistory from './HammingHistory';
//import Search from './Search';

var HammingDistanceCalc = (x,y) =>{
    let result = 0

    while(x>0 || y>0)
    {
      const right1 = x%2
      const right2 = y%2

      if(right1 !== right2)
      {
        result+=1
      }
      x = Math.floor(x/2)
      y = Math.floor(y/2)
    }
  return result
  };
function make2DArray(cols,rows){
  var arr = new Array(cols)
  for (let index = 0; index < arr.length; index++) {
    arr[index] = new Array(rows)
    
  }
  return arr
}
// var testMat = new Array(5)
const HammingDistance = () => {
  const [userHammList, setUserHammList] = useState([]);
  const [userhammingValue, setUserhammingValue] = useState([]);
  const [userSortedValues, setuserSortedValues] = useState([]);
  const [showTable, setshowTable] = useState(false);
  const [showHistory, setshowHistory] = useState(false);

  const hammingHandler = ingredient => {
      setshowTable(true)
      const nums = JSON.stringify(ingredient);
      var obj = JSON.parse(nums);
      var value = Object.keys(obj).map((key) =>( obj[key] ));
      const sortedVals = value.sort();
      setuserSortedValues(sortedVals);
      console.log(`Values after sorting : ${sortedVals}`);
      const matrix = make2DArray(5,5)
      for (let i = 0; i < sortedVals.length; i++) {
        const element1 = sortedVals[i];
        for (let j = 0; j < sortedVals.length; j++) {
          const element2 = sortedVals[j];

          matrix[i][j] = HammingDistanceCalc(element1,element2)
          console.log(`${element1} and ${element2}`)
          
        }
        
        
      }
      console.log(matrix)
      setUserhammingValue(
        matrix
      );
  }

  const addHistoryHandler = ingredient => {
    setshowHistory(true)
    setUserHammList(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ]);
    console.log(ingredient)
    
    // const dist = HammingDistance(sortedVals[0],sortedVals[1])
    // console.log(`Hamming distance between ${sortedVals[0]} and ${sortedVals[1]} = ${dist}`)



  };

  /*const computeHammingDist = ingredient => {

  }*/



  return (
    <div className="App">
      <HammForm onAddHistory={addHistoryHandler} onHamm={hammingHandler} />

      <section>        
        {showTable?<Table  hammingVal={userhammingValue} header={userSortedValues} />:''}
        {showHistory?<HammingHistory ingredients={userHammList} onRemoveItem={() => {}} />:''}
      </section>
    </div>
  );
};

export default HammingDistance;
