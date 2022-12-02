import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import Popup from '../../../components/Popup';
import AddSub from './AddSub/AddSub'
import EditableRow from './EditableRowS';
import ReadOnlyRow from './ReadOnlyRowS';

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
    {id:'wording', label:'الصياغة'},
    {id:'level', label:'المستوى'},
]

const SubjectMangement = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editSubjectId,setEditSubjectId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    level:0,
    wording:0
  })


  const [wording,setWording]=useState('');
  const [newWording,setNewWording]=useState('');

  const [level,setlevel]=useState();
  const [newLevel,setNewLevel]=useState();

  const [subjectList, setSubjectList]=useState([]);
  const [newSubjectList,setNewSubjectList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);

  function refreshPage() {
    window.location.reload(false); 
  }

  const {
      TblContainer,
      TblHead
    }=useTable(subjectList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/api/getSub").then((response)=>{
      setSubjectList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditSubjectId(val.id_matiere);

    const formValues={
      wording:val.libelle,
      level:val.niveau,   
    }
    setEditFormData(formValues);
  };

  const handleEditChange=(event)=>{
    event.preventDefault();

    const fieldLevel=event.target.getAttribute("level");
    const fieldValue=event.target.value;

    const newData={...editFormData};
    newData[fieldLevel]=fieldValue;
  }

  const deleteSubject = (id_Subject) => {
    Axios.delete(`http://localhost:3000/api/deleteSub/${id_Subject}`)
    console.log('deleted');
    console.log(id_Subject);
  };

  const updateSubjectWording=(id)=>{
    Axios.put("http://localhost:3000/updateSubjectWording",{
        wording:newWording,id_matiere:id
    });
      console.log(newWording);
  }

  const updateSubjectLevel=(id)=>{
    Axios.put("http://localhost:3000/updateSubjectLevel",{
      level:newLevel,id_matiere:id
    });
      console.log(newLevel); 
  }


  const handleCancelClick=()=>{
    setEditSubjectId(null);
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}>اضافة المواد</Button>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {subjectList.map((val)=>(
                      <React.Fragment>  
                        {editSubjectId === val.id_matiere?  ( 
                        <EditableRow 
                          editFormData={editFormData}
                          setNewLevel={setNewLevel}
                          setNewWording={setNewWording} 
                          handleEditClick={handleEditClick}
                          val={val} 
                          refreshPage={refreshPage}
                          updateSubjectWording={updateSubjectWording}
                          updateSubjectLevel={updateSubjectLevel}
                          newSubjectList={newSubjectList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRow val={val}
                            handleEditClick={handleEditClick} 
                            deleteSubject={deleteSubject}
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
            <AddSub setOpenPopup={setOpenPopup}/>
        </Popup>
    </div>
  );
}

export default SubjectMangement;