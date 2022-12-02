import {React,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRowP = ({refreshPage, val,updateStudentInscri,updateDate,updateFirsthour,updateLasthour,updateYear, setNewInscri,setNewDay,setNewFirsthour,setNewLasthour,setNewYear,editFormData,handleCancelClick}) => {
        return (
                <TableRow key={NavItem.id_absence}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{ 
                                        updateStudentInscri(val.id_absence);
                                        updateDate(val.id_absence)
                                        updateFirsthour(val.id_absence)
                                        updateLasthour(val.id_absence)
                                        updateYear(val.id_absence)
                                        refreshPage()
                                    }}
                                >
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
                                id="annee"
                                label=' السنة الدراسية'
                                name="annee"
                                autoComplete="annee"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.gender}
                                onChange={(e)=>{
                                       setNewYear(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="heurefin"
                                label='نهاية الغياب'
                                name="heurefin"
                                autoComplete="heurefin"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.password}
                                onChange={(e)=>{
                                   setNewLasthour(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="heuredebut"
                                label='بداية الغياب'
                                name="heuredebut"
                                autoComplete="heuredebut"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.password}
                                onChange={(e)=>{
                                   setNewFirsthour(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="يوم الغياب"
                                label='كلمة العبور'
                                name="password"
                                autoComplete="password"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.password}
                                onChange={(e)=>{
                                   setNewDay(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="insci"
                                label='رقم تسجيل التلميذ'
                                name="insci"
                                autoComplete="inscri"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.username}
                                onChange={(e)=>{
                                    setNewInscri(e.target.value)    
                                }}
                            />    
                        </TableCell> 
                     
                            
            </TableRow>
        );
};

export default EditableRowP;