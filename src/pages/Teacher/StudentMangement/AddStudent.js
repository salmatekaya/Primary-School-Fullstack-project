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

const AddStudent = (props) => {
  const classes = useStyles();
  const [id,setID]=useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [gender,setGender] = useState('female');
  const [birthdate,setBirthDate] = useState(new Date().toISOString().split('T')[0]);
  const [inscri,setInscri] = useState();
  
  const [studentList,setStudentList] = useState([]);
  const {setOpenPopup}=props;
  useEffect(()=>{
    Axios.get("http://localhost:3000/getStudents").then((response)=>{
      setStudentList(response.data);
    });
  },[]);
  const insertStudent = () => {
    Axios.post("http://localhost:3000/api/insertStudent",{
     id:id,firstname:firstName,lastname:lastName,gender:gender,birthdate:birthdate,inscri:inscri
  });
  };

  function refreshPage() {
    window.location.reload(false); 
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="body">
            اضافة التلاميذ          
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
            onChange={(e)=>{
                setFirstName(e.target.value);
              }}
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
            onChange={(e)=>{
                setLastName(e.target.value)
              }}
         />

          <br/><br/>
          <div className="radioLeft">
            <React.Fragment>
          <FormControl component="fieldset" >
            <FormLabel  component="legend">الجنس</FormLabel>
            <RadioGroup  
                className="radioLeft" 
                row aria-label="gender" 
                name="gender"
                onChange={(e)=>{
                    console.log("????");
                    setGender(e.target.value)
                }}
            
            >
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
          <TextField
            id="date"
            label="تاريخ الولادة"
            type="date"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            onChange={(e)=>{
                setBirthDate(e.target.value)
                console.log(birthdate)
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
              setOpenPopup(false)
              insertStudent()
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

export default AddStudent;