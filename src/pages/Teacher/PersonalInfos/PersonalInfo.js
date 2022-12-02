import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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


const PersonalInfoT = (props) => {
  const classes = useStyles();
  const [id,setId] = useState(null);
  const {setOpenPopup}=props;
  const [teacherList,setTeacherList] = useState({
    id:"",
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  });
  const [editTeacherId,setEditTeacherId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  })
  const { firstname,lastname, username,password } = teacherList;
  const onInputChange = e => {
    setTeacherList({ ...teacherList, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    Axios.get(`http://localhost:3000/getTeacher/`).then((response)=>{
      console.log('??');
      console.log(id)
      console.log(response)
      setTeacherList(response.data);
    });
  },[]);

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditTeacherId(val.id_enseignant);

    const formValues={
      firstname:val.prenom,
      lastname:val.nom,  
      username:val.login,
      password:val.mdp 
    }
    setEditFormData(formValues);
  };

  /*const updateTeacher = (val) => {
    Axios.put(`http://localhost:3000/teachers/${val.id_enseignant}`, teacherList)
  };*/
  /*useEffect(()=>{
    Axios.get("http://localhost:3000/getTeachers").then((response)=>{
      setTeacherList(response.data)
      console.log(response.data)
    })
  },[])*/

  
  function refreshPage() {
    window.location.reload(false); 
  }

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="body">
         مَعـلُــوماتك الـشخصية   
      </Typography>

      <form className={classes.form} noValidate > 
        <TextField 
          margin="normal"
          required
          fullWidth
          id="firstname"
          label="الاسم"
          name="firstname"
          autoComplete="firstname"
          autoFocus
          defaultValue={editFormData.firstname}
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          
        />
        <TextField
          className=""
          margin="normal"
          required
          fullWidth
          name="lastname"
          label="اللقب"
          type="lastname"
          id="lastname"
          autoComplete="lastname"
          defaultValue={editFormData.lastname}
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
       />
        <TextField
          className=""
          margin="normal"
          required
          fullWidth
          name="username"
          label="اسم المستخدم"
          type="username"
          id="username"
          autoComplete="username"
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          onChange={e => {
            onInputChange(e)
            console.log(username)
          }}  
       />

        <TextField
          className=""
          margin="normal"
          required
          fullWidth
          name="password"
          label="كلمة العبور"
          type="password"
          id="password"
          autoComplete="current-password"
          defaultValue={editFormData.password}
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}  
        />

        <br/><br/>
        </form>
        <button type="button" class="ui blue basic button"  
                    onClick={(e)=>{
                      console.log(e)
                      setOpenPopup(false)
                    }}
                >
                    تعديل
                </button> 
        </div>
        </Container>
    );
  }

export default PersonalInfoT;