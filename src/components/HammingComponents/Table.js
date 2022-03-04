import React from 'react';
import Card from '../UI/Card';
import TableRow from './TableRow';
import './Table.css'
import { useState } from 'react';
import Popup from 'reactjs-popup';

const Table = props => {
        const [open, setOpen] = useState(false);
        const closeModal = () => setOpen(false);
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
                    <button style={{span:'right',fontWeight:'bolder'}} onClick={() => setOpen(o => !o)}>i</button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">    
                    <Card>
                        
                        <a style={{fontWeight:'bold',cursor:'pointer'}} onClick={closeModal}>
                            &times;
                        </a> 
                        <h3>How it works!</h3>
                        <p>This table shows the Hamming distance between the values entered. </p><br/>
                        <p>Each row contains a number entered by the user and the respective columns show the Hamming distance between the values. The values are sorted and their hamming distances are computed accordingly.</p>
                        <p><span style={{fontWeight:'bold'}}>For example:</span> For numbers A,B,C,D and E. The first row contains the distance between number A with respect to numbers A,B,C,D and E presented as columns.</p>
                        
                    </Card>
                    </div> 
                    </Popup>
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
