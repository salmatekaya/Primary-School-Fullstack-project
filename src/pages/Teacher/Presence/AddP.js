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

const AddP = (props) => {
    const classes = useStyles();
    const [id,setID]=useState('');
  const [inscri,setInscri] = useState('');
  const [day,setDay] = useState(new Date().toISOString().split('T')[0]);
  const [firsthour,setFirsthour] = useState(new Date().toISOString().split('T')[1]);
  const [lasthour,setLasthour] = useState(new Date().toISOString().split('T')[1]);
  const [annee,setAnnee] = useState();
  
  const [presenceList,setPresenceList] = useState([]);
  const {setOpenPopup}=props;
  useEffect(()=>{
    Axios.get("http://localhost:3000/getPresence").then((response)=>{
      setPresenceList(response.data);
    });
  },[]);

  const insertAbsence = () => {
    Axios.post("http://localhost:3000/insertAbsence",{
     id_absence:id,id_eleve:inscri,jour:day,heure_debut:firsthour,heure_fin:lasthour,anneescolaire:annee
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
            تسجيل غياب التلميذ         
        </Typography>

        <form className={classes.form} noValidate > 
          <TextField 
           margin="normal"
           required
           fullWidth
           id="insci"
           label='رقم تسجيل التلميذ'
           name="insci"
           InputLabelProps={{style: {fontFamily:'Tajawal'}}}
           inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
           onChange={(e)=>{
               setInscri(e.target.value)    
           }}
          />
             <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="annee"
                                label=' السنة الدراسية'
                                name="annee"
                                autoComplete="annee"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                onChange={(e)=>{
                                       setAnnee(e.target.value)    
                                }}
                            /> 
          <div className="right"> 
          <TextField
            id="date"
            label="يوم الغياب"
            type="date"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            onChange={(e)=>{
               setDay(e.target.value);
                console.log(day);
            }}
    />
    <br/> <br/>
         
    <TextField
               id="heuredebut"
               label="سـاعة البداية "
               type="time"
               className={classes.textField}
               InputLabelProps={{
               shrink: true,
               }}
               onChange={(e)=>{
                  setFirsthour(e.target.value);
                  
               }}
           />
               <br/> <br/>
               <TextField
               id="heuredebut"
               label="ساعـة النهـايـة "
               type="time"
               className={classes.textField}
               InputLabelProps={{
               shrink: true,
               }}
               onChange={(e)=>{
                  setLasthour(e.target.value);
                  
               }}
           />
                         </div>
          <br/><br/>

          </form>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{
              setOpenPopup(false)
              insertAbsence()
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

export default AddP;