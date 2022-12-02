import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRow = ({editFormData,setNewFirstname,setNewLastname,setNewGender,val,refreshPage,updateStudentFirstname,updateStudentLastname,updateStudentGender,updateStudentBirthdate,newStudentList,handleCancelClick}) => {
        return (
                <TableRow key={NavItem.id_classe}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{
                                        updateStudentFirstname(val.id_classe)
                                        updateStudentLastname(val.id_classe)
                                        updateStudentGender(val.id_classe)
                                        updateStudentBirthdate(val.id_classe)
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
                                margin="normal"
                                required
                                fullWidth
                                id="gender"
                                label=' الجنس'
                                name="gender"
                                autoComplete="gender"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.gender}
                                onChange={(e)=>{
                                        setNewGender(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField
                                id="date"
                                label="تاريخ الولادة"
                                type="date"
                                defaultValue={editFormData.birthdate}
                                
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                className=""
                                margin="normal"
                                required
                                fullWidth
                                name="lastname"
                                label='اللقب'
                                type="lastname"
                                id="lastname"
                                autoComplete="lastname"
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.lastname}
                                onChange={(e)=>{
                                    setNewLastname(e.target.value)    
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="firstname"
                                label='الاسم'
                                name="firstname"
                                autoComplete="firstname"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.firstname}
                                onChange={(e)=>{
                                    setNewFirstname(e.target.value)    
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                className=""
                                margin="normal"
                                required
                                fullWidth
                                name="inscri"
                                label='رقم التسجيل'
                                type="inscri"
                                id="inscri"
                                autoComplete="inscri"
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.id}
                            />
                        </TableCell>
                        
                            

                </TableRow>
        );
};

export default EditableRow;