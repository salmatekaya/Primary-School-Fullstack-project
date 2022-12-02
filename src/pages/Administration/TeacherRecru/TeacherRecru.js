
import React,{useState} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
 
  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TeacherRecru = (props) => {
  const [teacherLogin,setTeacherLogin] = useState('');
  const [className,setClassName] = useState('');
  const [classLevel,setclassLevel] = useState('');
  const [subjectLibelle,setSubjectLibelle] = useState('');
  const [idE,setIdE] = useState('');
  const [idC,setIdC] = useState('');
  const [idS,setIdS] = useState('');
  const getIdteacher = (teacherLogin) => {
    Axios.get("http://localhost:3000/getIdteacher",{
      login:teacherLogin}).then((response,id1)=>{
        console.log(response)
        console.log('the id is ' + id1)
      });
  console.log(teacherLogin);
  };
  const getIdclass = (className,classLevel) => {
    Axios.get("http://localhost:3000/getIdclass",{
      id_classe:idC,nom:className,niveau:classLevel
  });
  };
  const getIdsubject = (subjectLibelle) => {
    Axios.get("http://localhost:3000/getIdsubject",{
      id_classe:idC,libelle:subjectLibelle
  });
  };
  const affectTeacher = () => {
    Axios.post("http://localhost:3000/affectTeacher",{
      id_enseignant:idE,id_classe:idC,id_matiere:idS});
  };
  const teacherLoginChangeHandler = (e) =>{
    
    setTeacherLogin(e.target.value);
   
  };
  const classNameChangeHandler = (e) =>{
    setClassName(e.target.value);
  };
  const classLevelChangeHandler = (e) =>{
    setclassLevel(e.target.value);
  };
  const subjectLibelleChangeHandler = (e) =>{
  
    setSubjectLibelle(e.target.value);
  };


  const classes = useStyles();
  function refreshPage() {
    window.location.reload(false); 
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="body">
           تعيــيــن المدرسيــن  
        </Typography>

        <form className={classes.form} noValidate > 
          <TextField 
            margin="normal"
            required
            fullWidth
            id="username"
            label="إسم المستخدم"
            name="username"
            autoComplete="username"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              teacherLoginChangeHandler(e)
            }}
            onBlur={()=>{
              console.log(teacherLogin);
              getIdteacher(teacherLogin);
            }}
          />
          <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="classname"
            label="إسم القسم"
            type="classname"
            id="classname"
            autoComplete="classname"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
             classNameChangeHandler(e)
              console.log(e);
            }}
         />
  
          <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="classlevel"
            label="مستوى القسم"
            type="classlevel"
            id="classlevel"
            autoComplete="classlevel"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              classLevelChangeHandler(e)
              console.log(e);
            }}
          />
      <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="subject"
            label="المادة"
            type="subject"
            id="subject"
            autoComplete="subject"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              subjectLibelleChangeHandler(e)
              console.log(e);
            }}
          />
          </form>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{
              affectTeacher()
              refreshPage()
             
            }}
          >
            اضافة
        
          </Button>
      
      </div>
      <Box mt={8}>
      </Box>
    </Container>

  );
}

export default TeacherRecru; 