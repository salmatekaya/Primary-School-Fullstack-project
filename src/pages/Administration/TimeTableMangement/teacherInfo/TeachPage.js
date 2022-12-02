import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import Read from './Read';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }, 
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  newButton:{
      position:'absolute',
      right:'10px'
  }
}));

const headCells=[
    {id:'actions',label:'أجراءات'},
    {id:'year', label:' الجنس'},
    {id:'year', label:'كلمة العبور'},
    {id:'number', label:'إسم المستخدم'},
    {id:'level', label:'اللقب'},
    {id:'name', label:'الاسم'},
]

const TeachPage = () => {

    const [teacherList, setTeacherList]=useState([]);

  const {
      TblContainer,
      TblHead
    }=useTable(teacherList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/getTeachers").then((response)=>{
      setTeacherList(response.data)
    })
  },[])


  return (
    <div>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {teacherList.map((val)=>(
                      <React.Fragment>  
                          <Read val={val}
                          />    
                      </React.Fragment>
                ))}
            </TableBody>
        </TblContainer>
    </div>
  );
}

export default TeachPage;