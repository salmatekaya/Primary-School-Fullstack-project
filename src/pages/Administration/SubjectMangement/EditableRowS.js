import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRow = ({refreshPage,val,updateSubjectWording,updateSubjectLevel,setNewWording,setNewLevel,editFormData,handleCancelClick}) => {
        return (
                <TableRow key={NavItem.id_matiere}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{
                                        updateSubjectLevel(val.id_matiere)
                                        updateSubjectWording(val.id_matiere)
                                        refreshPage()
                                    }}>
                                        تحديث
                                </button>  
                                <button 
                                    class="ui red basic button"
                                    onClick={handleCancelClick}
                                >
                                        إلغاء   
                                </button>  
                        </TableCell>
                        <TableCell>
                            <TextField
                                className=""
                                margin="normal"
                                required
                                fullWidth
                                name="wording"
                                label="الصياغة"
                                type="wording"
                                id="wording"
                                autoComplete="wording"
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.wording}
                                onChange={(e)=>{
                                    setNewWording(e.target.value)    
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="level"
                                label="المستوى"
                                name="level"
                                autoComplete="level"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.level}
                                onChange={(e)=>{
                                    setNewLevel(e.target.value)    
                                }}
                            />
                        </TableCell> 
                            

                </TableRow>
        );
};

export default EditableRow;