import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import { green } from '@material-ui/core/colors';
const ReadOnlyRowP = ({val,handleEditClick,deleteAbsence,refreshPage}) => 
{
    return(
        <TableRow key={NavItem.id_absence}>
            <TableCell>
               
                <button type="button" class="ui blue basic button"  
                    onClick={(event)=>{
                        handleEditClick(event,val)
                    }}
                >
                    تعديل
                </button> 
                <button class="ui red basic button"
                    onClick={()=>{
                        deleteAbsence(val.id_absence)
                        refreshPage()
                    }}
                >
                    حذف
                </button>
            </TableCell>    
            <TableCell>{val.anneescolaire}</TableCell> 
            <TableCell>{val.heure_fin}</TableCell>
            <TableCell>{val.heure_debut}</TableCell> 
            <TableCell>{val.jour}</TableCell>
            <TableCell>{val.id_eleve}</TableCell>
            
        </TableRow>
    );
};


export default ReadOnlyRowP;