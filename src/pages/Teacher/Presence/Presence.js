import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import EditableRowP from './EditableRowP';
import ReadOnlyRowP from './ReadOnlyRowP';
import Popup from '../../../components/Popup';
import AddP from './AddP';

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
    {id:'year', label:'السنة الدراسية'},
    {id:'year', label:' نهاية الغياب'},
    {id:'year', label:'بداية الغياب'},
    {id:'number', label:'الـيـوم'},
    {id:'name', label:'رقم تسجيل التلميذ'},
]

const Presence = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editPresenceId,setEditPresenceId] = useState(null);
  const [editFormData,setEditFormData]=useState({
   inscription:"",
    jour:"",
   firsthour:"",
   lasthour:"",
   annee:""
  })


  const [inscri,setInscri] = useState('');
   const [newInscri,setNewInscri]=useState('');

  const [lastname,setLastname]=useState();
  const [newDay,setNewDay]=useState('');

  const [username,setUsername]=useState('');
  const [newFirsthour,setNewFirsthour]=useState('');

  const [newGender,setNewGender]=useState('');
  const [newLasthour,setNewLasthour]=useState('');
  const [newYear,setNewYear]=useState('');
  const [presenceList, setPresenceList]=useState([]);
  const [newPresenceList,setNewPresenceList]=useState([]);
  const [openPopup,setOpenPopup]=useState(false);
  const [idS,setIdS] = useState('');

function refreshPage() {
    window.location.reload(false); 
  }

  const {
      TblContainer,
      TblHead
    }=useTable(presenceList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/getPresence").then((response)=>{
      setPresenceList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditPresenceId(val.id_absence);

    const formValues={
      ideleve:val.id_eleve,
      jour:val.jour,
     heuredebut:val.heure_debut,
      heurefin:val.heure_fin,
      annee:val.anneescolaie  
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

  const deleteAbsence = (id_absence) => {
    Axios.delete(`http://localhost:3000/deletePresence/${id_absence}`)
    console.log('deleted');
    console.log(id_absence);
  };

  const updateStudentInscri=(id)=>{
    Axios.put("http://localhost:3000/updateStudentInscri",{
        inscription:newInscri,id_absence:id
    });    
      console.log(newInscri);
 
  }

  const updateDate=(id)=>{
    Axios.put("http://localhost:3000/updateStudentDay",{
      jour:newDay,id_absence:id
    });
      console.log(newDay); 
  }

  const updateFirsthour=(id)=>{
    Axios.put("http://localhost:3000/updateStudentFirsthour",{
      heuredebut:newFirsthour,id_absence:id,
    });
      console.log(newFirsthour);
  }

  const updateLasthour=(id)=>{
    Axios.put("http://localhost:3000/updateStudentLasthour",{
      heurefin:newLasthour,id_absence:id
    });
      console.log(newLasthour);
  }
  const updateYear=(id)=>{
    Axios.put("http://localhost:3000/updateStudentYear",{
      annee:newYear,id_absence:id
    });
      console.log(newYear);
  }

  const handleCancelClick=()=>{
   setEditPresenceId(null);
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}> تسجيل غياب التلميذ   </Button>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {presenceList.map((val)=>(
                      <React.Fragment>  
                        {editPresenceId === val.id_absence?  ( 
                        <EditableRowP
                          editFormData={editFormData}
                          handleEditChange={handleEditClick}
                          setNewInscri={setNewInscri}
                          setNewDay={setNewDay}
                          setNewFirsthour={setNewFirsthour} 
                          setNewLasthour={setNewLasthour}
                          setNewYear={setNewYear}
                          val={val} 
                          refreshPage={refreshPage}
                          updateStudentInscri={updateStudentInscri}
                          updateDate={updateDate}
                          updateFirsthour={updateFirsthour}
                          updateLasthour={updateLasthour}
                          updateYear={updateYear}
                          newPresenceList={newPresenceList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRowP
                           val={val}
                            handleEditClick={handleEditClick} 
                            deleteAbsence={deleteAbsence}
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
            <AddP setOpenPopup={setOpenPopup}/>
        </Popup>
    </div>
  );
}

export default Presence; 