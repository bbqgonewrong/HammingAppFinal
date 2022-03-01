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
                <h3>
                    Hamming Distance Calculator
                </h3>
                <table className='styled-table'>
                <thead>
                    <tr>
                        <th></th>
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
