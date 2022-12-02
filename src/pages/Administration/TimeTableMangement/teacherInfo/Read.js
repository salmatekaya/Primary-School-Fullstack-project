import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const Read = ({val}) => 
{
    return(
        <TableRow key={NavItem.id_enseignant}>
            <TableCell>
                <button type="button" class="ui green basic button"  
                   
                >
                    <a class="header" href={`/admin/timetablemanagemnet/${val.id_enseignant}`}>
                    جدول الاوقات
                    </a>
                </button>  
            </TableCell>    
            <TableCell>{val.genre}</TableCell> 
            <TableCell>{val.mdp}</TableCell>
            <TableCell>{val.login}</TableCell> 
            <TableCell>{val.nom}</TableCell>
            <TableCell>{val.prenom}</TableCell>
            
        </TableRow>
    );
};


export default Read;