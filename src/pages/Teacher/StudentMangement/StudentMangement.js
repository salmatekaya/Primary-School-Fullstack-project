import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody } from '@material-ui/core';
import Popup from '../../../components/Popup';
import AddStudent from './AddStudent';
import EditableRowStudent from './EditableRowStudent';
import ReadOnlyRowStudent from './ReadOnlyRowStudent'

const headCells=[
    {id:'actions',label:'أجراءات'},
    {id:'gender', label:' الجنس'},
    {id:'birthdate',label:'تاريخ الولادة'},
    {id:'lastName', label:'اللقب'},
    {id:'firstName', label:'الاسم'},
    {id:'inscri', label:'رقم التسجيل'},

]

const StudentMangement = () => {
  const [editStudentId,setEditStudentId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    id:0,
    firstname:"",
    lastname:"",
    gender:"female",
    birthdate:new Date(),
  })


  const [firstname,setFirstName]=useState('');
  const [newFirstname,setNewFirstname]=useState('');

  const [lastname,setLastname]=useState();
  const [newLastname,setNewLastname]=useState('');

  const [newGender,setNewGender]=useState('');
  const [newBirthDate,setNewBirthDate]=useState('');

  const [studentList, setStudentList]=useState([]);
  const [newStudentList,setNewStudentList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);

  function refreshPage() {
    window.location.reload(false); 
  }

  const {
      TblContainer,
      TblHead
    }=useTable(studentList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/api/getStudents").then((response)=>{
      setStudentList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditStudentId(val.id_eleve);

    const formValues={
      firstname:val.prenom,
      lastname:val.nom,
      gender:val.sexe,
      birthdate:val.date_naissance,
      inscri:val.num_inscription  
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

  const deleteStudent = (id_eleve) => {
    Axios.delete(`http://localhost:3000/api/deleteStudent/${id_eleve}`)
    console.log('deleted');
    console.log(id_eleve);
  };

  const updateStudentFirstname=(id)=>{
    Axios.put("http://localhost:3000/updateStudentFirstname",{
        firstname:newFirstname,id_eleve:id
    });
      console.log(newFirstname);
      console.log(id)
  }

  const updateStudentLastname=(id)=>{
    Axios.put("http://localhost:3000/updateStudentLastname",{
      lastname:newLastname,id_enseignant:id
    });
      console.log(newLastname); 
  }

  const updateStudentGender=(id)=>{
    Axios.put("http://localhost:3000/updateStudentGender",{
      gender:newGender,id_enseignant:id,
    });
      console.log(newGender);
  }

  const updateStudentBirthdate=(id)=>{
    Axios.put("http://localhost:3000/updateStudentBirthdate",{
      Birthdate:newBirthDate,id_enseignant:id
    });
      console.log(newBirthDate);
  }

  const handleCancelClick=()=>{
    setEditStudentId(null);
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}>اضافةالتلاميذ </Button>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {studentList.map((val)=>(
                      <React.Fragment>  
                        {editStudentId === val.id_eleve?  ( 
                        <EditableRowStudent 
                          editFormData={editFormData}
                          handleEditChange={handleEditClick}
                          setNewFirstname={setNewFirstname}
                          setNewLastname={setNewLastname}
                          setNewGender={setNewGender} 
                          setNewBirthDate={setNewBirthDate}
                          val={val} 
                          refreshPage={refreshPage}
                          updateStudentFirstname={updateStudentFirstname}
                          updateStudentLastname={updateStudentLastname}
                          updateStudentGender={updateStudentGender}
                          updateStudentBirthdate={updateStudentBirthdate}
                          newStudentList={newStudentList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRowStudent val={val}
                            handleEditClick={handleEditClick} 
                            deleteStudent={deleteStudent}
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
            <AddStudent setOpenPopup={setOpenPopup}/>
        </Popup>
    </div>
  );
}

export default StudentMangement;