
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './AddT.css'



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

const AddT = (props) => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [gender,setGender] = useState('female');
  const [teacherList,setTeacherList] = useState([]);
  const {setOpenPopup}=props;
  useEffect(()=>{
    Axios.get("http://localhost:3000/getTeachers").then((response)=>{
      setTeacherList(response.data);
    });
  },[]);
  const registerTeacher = () => {
    Axios.post("http://localhost:3000/registerTeacher",{
     genre:gender,prenom:firstName,nom:lastName,login:userName,mdp:password
  });
    setTeacherList([...teacherList,
      {genre:gender,prenom:firstName,nom:lastName,login:userName,mdp:password},
    ]); 
  };
  const firstNameChangeHandler = (e) =>{
    
    setFirstName(e.target.value);
   
  };
  const lastNameChangeHandler = (e) =>{
    setLastName(e.target.value);
  };
  const userNameChangeHandler = (e) =>{
    setUserName(e.target.value);
  };
  const passwordChangeHandler = (e) =>{
  
    setPassword(e.target.value);
  };
  const genderChangeHandler = (e) =>{
    setGender(e.target.value);
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
           إضافة المعلمين   
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
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={firstNameChangeHandler}
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
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={lastNameChangeHandler}
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
            onChange={userNameChangeHandler}

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
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={passwordChangeHandler}
          />

          <br/><br/>
          <div className="radioLeft">
            <React.Fragment>
          <FormControl component="fieldset" >
            <FormLabel  component="legend">الجنس</FormLabel>
            <RadioGroup  className="radioLeft" row aria-label="gender" name="gender"  onChange={genderChangeHandler}>
                    <FormControlLabel 
                  
                        value="female" 
                        control={<Radio color="grey" />} 
                        labelPlacement="start" 
                        label="أنثى" 
                    />
                    <FormControlLabel 
                
                        value="male" 
                        control={<Radio color="grey"/>} 
                        
                        labelPlacement="start" 
                        label="ذكر"
                        inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                    />
      </RadioGroup>
      </FormControl>
      </React.Fragment>
          </div>
          </form>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{
              setOpenPopup(false)
              registerTeacher()
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

export default AddT;