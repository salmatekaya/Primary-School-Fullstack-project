import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import { green } from '@material-ui/core/colors';
import PersonalInfoT from '../../Teacher/PersonalInfos/PersonalInfo';
const ReadOnlyRow = ({val,handleEditClick,deleteTeacher,refreshPage}) => 
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
                <button type="button" class="ui blue basic button"  
                    onClick={(event)=>{
                        handleEditClick(event,val)
                    }}
                    
                >
                    تعديل
                </button> 
                <button class="ui red basic button"
                    onClick={()=>{
                        deleteTeacher(val.id_enseignant)
                        refreshPage()
                    }}
                >
                    حذف
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


export default ReadOnlyRow;