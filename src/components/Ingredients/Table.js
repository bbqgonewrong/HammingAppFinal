import React from 'react';
import Card from '../UI/Card';
import TableRow from './TableRow';
import './Search.css'
const Table = props => {

        var heading = props.header;
        var body = props.hammingVal;
        console.log(props.header)
        return (
            <section className='ingredient-form'>
                
                <Card>
                <div className='HammingHeader'>
                    <h3 style={{span:'left'}}>
                    Hamming Distance Calculator
                    </h3>
                    <button style={{span:'right',fontWeight:'bolder'}}>i</button>
                </div>    
                
                <table className='styled-table'>
                <thead>
                    <tr>
                        <th className='theader'>Hamming values</th>
                        {heading.map((head,index) => <th key={index}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map((row,index) => <TableRow row={row} ind={index} header={heading} />)}
                </tbody>
                </table>
                </Card>
            </section>
            
        );
    }

  
export default Table;
