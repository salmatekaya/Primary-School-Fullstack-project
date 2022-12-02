import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import Popup from '../../../components/Popup';
import AddT from './AddT/AddT'
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';


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

const TeacherMangement = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editTeacherId,setEditTeacherId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    firstname:"",
    lastname:"",
    gender:"",
    username:"",
    password:""
  })


  const [firstname,setFirstName]=useState('');
  const [newFirstname,setNewFirstname]=useState('');

  const [lastname,setLastname]=useState();
  const [newLastname,setNewLastname]=useState('');

  const [username,setUsername]=useState('');
  const [newUsername,setNewUsername]=useState('');

  const [newGender,setNewGender]=useState('');
  const [newPassword,setNewPassword]=useState('');

  const [teacherList, setTeacherList]=useState([]);
  const [newTeacherList,setNewTeacherList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);

  function refreshPage() {
    window.location.reload(false); 
  }

  const {
      TblContainer,
      TblHead
    }=useTable(teacherList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/getTeachers").then((response)=>{
      setTeacherList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditTeacherId(val.id_enseignant);

    const formValues={
      firstname:val.prenom,
      lastname:val.nom,
      gender:val.genre,
      username:val.login,
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

  const deleteTeacher = (id_enseignant) => {
    Axios.delete(`http://localhost:3000/deleteTeacher/${id_enseignant}`)
    console.log('deleted');
    console.log(id_enseignant);
  };

  const updateTeacherFirstname=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherFirstname",{
        firstname:newFirstname,id_enseignant:id
    });    
      console.log(newFirstname);
      console.log(newFirstname);
      console.log(id)
  }

  const updateTeacherLastname=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherLastname",{
      lastname:newLastname,id_enseignant:id
    });
      console.log(newLastname); 
  }

  const updateTeacherGender=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherGender",{
      gender:newGender,id_enseignant:id,
    });
      console.log(newGender);
  }

  const updateTeacherUsername=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherUsername",{
      username:newUsername,id_enseignant:id
    });
      console.log(newUsername);
  }
  const updateTeacherPassword=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherPassword",{
      password:newPassword,id_enseignant:id
    });
      console.log(newPassword);
  }

  const handleCancelClick=()=>{
    setEditTeacherId(null);
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}>اضافةالمعلمــين</Button>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {teacherList.map((val)=>(
                      <React.Fragment>  
                        {editTeacherId === val.id_enseignant?  ( 
                        <EditableRow 
                          editFormData={editFormData}
                          handleEditChange={handleEditClick}
                          setNewFirstname={setNewFirstname}
                          setNewLastname={setNewLastname}
                          setNewGender={setNewGender} 
                          setNewUsername={setNewUsername}
                          setNewPassword={setNewPassword}
                          newFirstname={newFirstname}
                          val={val} 
                          refreshPage={refreshPage}
                          updateTeacherFirstname={updateTeacherFirstname}
                          updateTeacherLastname={updateTeacherLastname}
                          updateTeacherGender={updateTeacherGender}
                          updateTeacherUsername={updateTeacherUsername}
                          updateTeacherPassword={updateTeacherPassword}
                          newTeacherList={newTeacherList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRow val={val}
                            handleEditClick={handleEditClick} 
                            deleteTeacher={deleteTeacher}
                            refreshPage={refreshPage}
                          />
                        )
                        }
                      </React.Fragment>
                ))}
            </TableBody>
        </TblContainer>

        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <AddT setOpenPopup={setOpenPopup}/>
        </Popup>
    </div>
  );
}

export default TeacherMangement;