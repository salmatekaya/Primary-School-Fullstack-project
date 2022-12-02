import React,{useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Error from './error';


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
}));

const LoginTeacher = () => {
  const [id,setId] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [loginstatus,setLoginstatus] = useState("");
  const [test,setTest]=useState()
  const usernameChangeHandler = (e) =>{
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) =>{
    setPassword(e.target.value);
  };
   const Login = () => {
      Axios.post("http://localhost:3000/loginTeacher",{
       login:username,mdp:password}).then((response)=>{
         if(response.data.message) {
          setTest(false)
          setLoginstatus(response.data.message)
          alert('هذا المعلم غير مسجل');
         } else {
          console.log(response.data[0].id_enseignant);
          setTest(true)
          setLoginstatus(response.data[0].id_enseignant);
          setId(response.data[0].id_enseignant);
         }
        
       });

   };

  const classes = useStyles();
  let history=useHistory()

  const handelClick=(event)=>{
    if(test){
      history.push(`/teacher/${id}`) 
    }else{
      <Error/>
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="body">
          تسجيل دخــول المعلميـــن
        </Typography>
        <form className={classes.form} noValidate>
            
          <TextField 
            margin="normal"
            required
            fullWidth
            id="username"
            label="إسم المستخدم"
            name="username"
            autoComplete="usename"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={usernameChangeHandler}
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
              Login()
              handelClick(e)
            }}
          >
            دخول
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body">
                هل نسيت كلمة العبور؟
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
  
    </Container>
  );
}

export default LoginTeacher;
