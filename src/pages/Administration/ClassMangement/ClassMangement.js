import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody } from '@material-ui/core';
import Popup from '../../../components/Popup';
import AddC from './AddC/AddC'
import EditableRow from './EditableRowC';
import ReadOnlyRow from './ReadOnlyRowC';


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
    {id:'year', label:'السنة دراسية'},
    {id:'number', label:'عدد التلاميذ '},
    {id:'name', label:'الاسم'},
    {id:'level', label:'المستوى'},
]

const ClassMangement = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editClassId,setEditClassId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    name:"",
    level:"",
    number:0,
    year:""
  })


  const [name,setName]=useState('');
  const [newName,setNewName]=useState('');

  const [level,setlevel]=useState();
  const [newLevel,setNewLevel]=useState();

  const [number,setNumber]=useState('');
  const [newNumber,setNewNumber]=useState('');

  const [newYear,setNewYear]=useState('');

  const [classList, setClassList]=useState([]);
  const [newClassList,setNewClassList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);
  const [notify,setNotify]=useState({isOpen:false,message:'',type:''})

  function refreshPage() {
    window.location.reload(false); 
  }

  const {
      TblContainer,
      TblHead
    }=useTable(classList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/api/get").then((response)=>{
      setClassList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditClassId(val.id_classe);

    const formValues={
      name:val.nom,
      level:val.niveau,
      number:val.nb,
      year:val.anneescolaire     
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

  const deleteClass = (id_classe) => {
    Axios.delete(`http://localhost:3000/api/delete/${id_classe}`)
    console.log('deleted');
    console.log(id_classe);
  };

  const updateClassName=(id)=>{
    Axios.put("http://localhost:3000/updateClassName",{
        name:newName,id_classe:id
    });
      console.log(newName);
  }

  const updateClassLevel=(id)=>{
    Axios.put("http://localhost:3000/updateClassLevel",{
      level:newLevel,id_classe:id
    });
      console.log(newLevel); 
  }

  const updateClassNumber=(id)=>{
    Axios.put("http://localhost:3000/updateClassNumber",{
      number:newNumber,id_classe:id,
    });
      console.log(newNumber);
  }

  const updateClassYear=(id)=>{
    Axios.put("http://localhost:3000/updateClassYear",{
      year:newYear,id_classe:id
    });
      console.log(newYear);
  }

  const handleCancelClick=()=>{
    setEditClassId(null);
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}>اضافة الاقسام</Button>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {classList.map((val)=>(
                      <React.Fragment>  
                        {editClassId === val.id_classe?  ( 
                        <EditableRow 
                          editFormData={editFormData}
                          handleEditChange={handleEditClick}
                          setNewLevel={setNewLevel}
                          setNewNumber={setNewNumber}
                          setNewName={setNewName} 
                          setNewYear={setNewYear}
                          val={val} 
                          refreshPage={refreshPage}
                          updateClassName={updateClassName}
                          updateClassLevel={updateClassLevel}
                          updateClassNumber={updateClassNumber}
                          updateClassYear={updateClassYear}
                          newClassList={newClassList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRow val={val}
                            handleEditClick={handleEditClick} 
                            deleteClass={deleteClass}
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
            <AddC setOpenPopup={setOpenPopup}/>
        </Popup>
    </div>
  );
}

export default ClassMangement;