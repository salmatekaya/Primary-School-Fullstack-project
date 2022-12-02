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

const LoginAdmin = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loginstatus,setLoginstatus] = useState("");
  const [test,setTest]=useState()
  const emailChangeHandler = (e) =>{
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) =>{
    setPassword(e.target.value);
  };
   const Login = () => {
      Axios.post("http://localhost:3000/loginAdmin",{
       email:email,mdp:password}).then((response)=>{
         if(response.data.message) {
          setTest(false)
          setLoginstatus(response.data.message)
          alert('هذا المسؤول غير مسجل');
         } else {
          setTest(true)
          setLoginstatus(response.data[0].email)   
         }
       
        
       });

   };

  const classes = useStyles();
  let history=useHistory()
   const alertadmin = () => {
     return (
      <div class="alert alert-primary" role="alert">
      This is a primary alert—check it out!
    </div>
     );
   };
  const handelClick=()=>{
    if(test){
      history.push('/admin')
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
          تسجيل دخــول الإداريـيـن
        </Typography>
        <form className={classes.form} noValidate>
            
          <TextField 
            margin="normal"
            required
            fullWidth
            id="email"
            label="البريد الإلكتروني"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={emailChangeHandler}
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
            onClick={()=>{
              Login()
              handelClick()
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

export default LoginAdmin;