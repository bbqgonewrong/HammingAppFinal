import React from "react";
const TableRow = props => {
        var i=props.ind;
        var head = props.header;
        console.log(i);
        console.log(head[i]);
        var row = props.row;
        return (
            <tr>
                <td className="columnss">{head[i]}</td>
                {row.map((val,index) => <td key={index}>{val}</td>)}
            </tr>
        )
    }


export default TableRow