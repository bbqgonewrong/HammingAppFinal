import React from 'react';
import { render } from 'react-dom';

// import { render } from 'react-dom';

import Card from '../UI/Card';
import './Search.css';
const Search = props => {
  // var heading = ['Name', 'City', 'Course', 'Course', 'Course'];
  var body = props.hammingVal;
  console.log(`From Search body ${JSON.stringify(body)}`)
  
  return (
     
    <section className="search">
      <Card>
      
      {/* <table style={{ width: 500 }}>
                
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table> */}
      </Card>
    </section>
  );
};
// function TableRow (props) {
//   var row = props.row;
//   return (
//       <tr>
//           {row.map(val => <td>{val}</td>)}
//       </tr>
//   ) 
// }
function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}
export default Search;
