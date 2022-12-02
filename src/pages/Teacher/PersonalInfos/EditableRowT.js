/*import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRowT = ({newFirstname,refreshPage,setEditFirstname,val,updateTeacherFirstname, updateTeacherUsername,updateTeacherLastname,updateTeacherPassword,setNewPassword,setNewFirstname,setNewUsername,setNewLastname,editFormData,handleCancelClick}) => {
        return (
                <TableRow key={NavItem.id_dir}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{ if (setEditFirstname)
                                        updateTeacherFirstname(val.id_enseignant);
                                        updateTeacherLastname(val.id_enseignant)
                                         updateTeacherUsername(val.id_enseignant)
                                         updateTeacherPassword(val.id_enseignant)
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
                                id="password"
                                label='كلمة العبور'
                                name="password"
                                autoComplete="password"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.password}
                                onChange={(e)=>{
                                        setNewPassword(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label='إسم المستخدم'
                                name="username"
                                autoComplete="username"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.username}
                                onChange={(e)=>{
                                    setNewUsername(e.target.value)    
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
                    
                                    setNewLastname(e.target.value);
                                    
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
                                    if(e.target.value.length>0){
                                        setEditFirstname(true);
                                        setNewFirstname(e.target.value);}
                                }}
                            />
                        </TableCell> 
                            

                </TableRow>
        );
};

export default EditableRowT;*/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRowT = ({newFirstname,refreshPage,setEditFirstname,val,updateTeacherFirstname, updateTeacherUsername,updateTeacherLastname,updateTeacherPassword,setNewPassword,setNewFirstname,setNewUsername,setNewLastname,editFormData,handleCancelClick}) => {
        return (
            <div>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{ 
                                        updateTeacherFirstname(val.id_enseignant);
                                        updateTeacherLastname(val.id_enseignant)
                                        updateTeacherUsername(val.id_enseignant)
                                        updateTeacherPassword(val.id_enseignant)
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
                                </div>
                                );
};

export default EditableRowT;