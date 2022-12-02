 import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import Popup from '../../../components/Popup';
const ReadOnlyRow = ({val,handleEditClick,deleteStudent,refreshPage,openPopup,setOpenPopup}) => 
{
    return(
        <TableRow key={NavItem.id_eleve}>
            <TableCell>
                <button type="button" class="ui green basic button"  
                    
                >
                    <a href={`/teacher/studentassignment/${val.id_eleve}`}>
                    تعيين القسم
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
                        deleteStudent(val.id_eleve)
                        refreshPage()
                    }}
                >
                    حذف
                </button>
            </TableCell>    
            <TableCell>{val.sexe}</TableCell>
            <TableCell>{val.date_naissance.split('T')[0]}</TableCell> 
            <TableCell>{val.nom}</TableCell> 
            <TableCell>{val.prenom}</TableCell> 
            <TableCell>{val.id_eleve}</TableCell> 
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
            </Popup> 
        </TableRow>
        
    );
};


export default ReadOnlyRow;