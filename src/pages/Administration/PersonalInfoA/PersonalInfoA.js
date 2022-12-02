import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import ReadOnlyRowA from './ReadOnlyRowA';
import EditableRowA from './EditableRowA';

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
    {id:'actions',label:'تعديل المعلومات الشخصية'},
    {id:'password', label:'كلمة العبور'},
    {id:'email', label:'البريد الإلكتروني'},
    {id:'lastname', label:'اللقب'},
    {id:'firstname', label:'الاسم'},
]

const PersonalInfoA = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editPersonalInfoId,setEditPersonalInfoId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })


  const [firstname,setFirstname]=useState('');
  const [newFirstname,setNewFirstname]=useState('');

  const [level,setlevel]=useState();
  const [newLastname,setNewLastname]=useState('');

  const [number,setNumber]=useState('');
  const [newEmail,setNewEmail]=useState('');

  const [newPassword,setNewPassword]=useState('');
  const [editFirstname,setEditFirstname]=useState(false);
  const [editLastname,setEditLastname]=useState(false);
  const [editEmail,setEditEmail]=useState(false);
  const [editPassword,setEditPassword]=useState(false);

  const [personalInfoList, setPersonalInfoList]=useState([]);
  const [newPersonalInfoList,setNewPersonalInfoList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);

  function refreshPage() {
    window.location.reload(false); 
  }

  const {
      TblContainer,
      TblHead
    }=useTable(personalInfoList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/getAdminInfo").then((response)=>{
        setPersonalInfoList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditPersonalInfoId(val.id_dir);

    const formValues={
      firstname:val.prenom,
      lastname:val.nom,
      email:val.email,
      password:val.mdp     
    }
    setEditFormData(formValues);
  };

  const handleEditChange=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newData={...editFormData};
    newData[fieldName]=fieldValue;
  }

  const updateAdminFirstname=(id)=>{
    Axios.put("http://localhost:3000/updateAdminFirstname",{
        firstname:newFirstname,id_dir:id
    });
       
      console.log(newFirstname);
  }

  const updateAdminLastname=(id)=>{
    Axios.put("http://localhost:3000/updateAdminLastname",{
      lastname:newLastname,id_dir:id
    });
      console.log(newLastname); 
  }

  const updateAdminEmail=(id)=>{
    Axios.put("http://localhost:3000/updateAdminEmail",{
     email:newEmail,id_dir:id
    });
      console.log(newEmail);
  }
  const updateAdminPassword=(id)=>{
    Axios.put("http://localhost:3000/updateAdminPassword",{
      password:newPassword,id_dir:id
    });
      console.log(newPassword);
  }

  const handleCancelClick=()=>{
    setEditPersonalInfoId(null);
  }

  return (
    <div>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {personalInfoList.map((val)=>(
                      <React.Fragment>  
                        {editPersonalInfoId === val.id_dir?  ( 
                        <EditableRowA 
                          editFormData={editFormData}
                          handleEditClick={handleEditClick}
                          setNewFirstname={setNewFirstname}
                          setNewLastname={setNewLastname}
                          setNewEmail={setNewEmail}
                          setNewPassword={setNewPassword}
                          setEditFirstname={setEditFirstname}
                          setEditLastname={setEditLastname}
                          setEditEmail={setEditEmail}
                          setEditPassword={setEditPassword}
                          newFirstname={newFirstname}
                          val={val} 
                          refreshPage={refreshPage}
                          updateAdminFirstname={updateAdminFirstname}
                          updateAdminLastname={updateAdminLastname}
                          updateAdminEmail={updateAdminEmail}
                          updateAdminPassword={updateAdminPassword}
                          newPersonalInfoList={newPersonalInfoList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRowA val={val}
                            handleEditClick={handleEditClick} 
                            refreshPage={refreshPage}
                          />
                        )
                        }
                      </React.Fragment>
                ))}
            </TableBody>
        </TblContainer>

    </div>
  );
}

export default PersonalInfoA;