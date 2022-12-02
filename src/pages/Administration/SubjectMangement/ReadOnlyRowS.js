import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import Popup from '../../../components/Popup';
const ReadOnlyRow = ({val,handleEditClick,deleteSubject,refreshPage,openPopup,setOpenPopup}) => 
{
    return(
        <TableRow key={NavItem.id_matiere}>
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
                        deleteSubject(val.id_matiere)
                        refreshPage()
                    }}
                >
                    حذف
                </button>
            </TableCell>    
            <TableCell>{val.libelle}</TableCell> 
            <TableCell>{val.niveau}</TableCell>  
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
            </Popup> 
        </TableRow>
        
    );
};


export default ReadOnlyRow