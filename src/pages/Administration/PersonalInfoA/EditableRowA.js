import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRowA = ({refreshPage,setEditLastname,setEditEmail,setEditPassword,setEditFirstname,val,updateAdminFirstname, updateAdminLastname,updateAdminEmail, updateAdminPassword,setNewPassword,setNewFirstname,setNewEmail,setNewLastname,editFormData,handleCancelClick}) => {
        return (
                <TableRow key={NavItem.id_dir}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{ if (setEditFirstname)
                                        updateAdminFirstname(val.id_dir);
                                        updateAdminLastname(val.id_dir)
                                        updateAdminEmail(val.id_dir)
                                        updateAdminPassword(val.id_dir)
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
                                    if(e.target.value.length>0){
                                        setEditPassword(true)
                                        setEditPassword(e.target.value);}       
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label='البريد الإلكتروني'
                                name="email"
                                autoComplete="email"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.email}
                                onChange={(e)=>{
                                    if(e.target.value.length>0){
                                     setEditEmail(true)
                                     setEditEmail(e.target.value);}   
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
                                    if(e.target.value.length>0){
                                        setEditLastname(true)
                                    setNewLastname(e.target.value);}
                                    
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

export default EditableRowA;