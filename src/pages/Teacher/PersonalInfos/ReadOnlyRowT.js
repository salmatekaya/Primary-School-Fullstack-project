/*import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const ReadOnlyRowT = ({val,handleEditClick,refreshPage}) => 
{
    return(
        <TableRow key={NavItem.id_enseignant}>
            <TableCell>
                <button type="button" class="ui blue basic button"  
                    onClick={(event)=>{
                        handleEditClick(event,val)
                    }}
                >
                    تعديل
                </button> 
            </TableCell>    
            <TableCell>{val.mdp}</TableCell>
            <TableCell>{val.login}</TableCell> 
            <TableCell>{val.nom}</TableCell>
            <TableCell>{val.prenom}</TableCell>
            
        </TableRow>
    );
};*/
import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const ReadOnlyRowT = ({val,handleEditClick,refreshPage}) => 
{  return(
            <button type="button" class="ui blue basic button"  
                onClick={(event)=>{
                    handleEditClick(event,val)
                }}
            >
                تعديل
            </button> 
   );
};

export default ReadOnlyRowT;