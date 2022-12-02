import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

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

const AddSub= (props) => {
  const classes = useStyles();
  const [id,setID]=useState();
  const [level,setlevel]=useState();
  const [wording,setWording]=useState();
  const {setOpenPopup}=props;

  function refreshPage() {
    window.location.reload(false); 
  }

  const submitSubject=()=>{
    Axios.post('http://localhost:3000/api/insertSub',{
      id:id,level:level,wording:wording
    })
    console.log(level)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="body">
          إضافة المواد     
        </Typography>
        <form className={classes.form} noValidate>

        <TextField 
            margin="normal"
            required
            fullWidth
            id="level"
            label="المستوى"
            name="level"
            autoComplete="level"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              setlevel(e.target.value)
            }}
          />
          <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="wording"
            label="الصياغة "
            type="wording"
            id="wording"
            autoComplete="wording"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              setWording(e.target.value)
            }}
          />
          <br/><br/>
          </form>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitSubject}
            onClick={()=>{
              setOpenPopup(false)
              submitSubject()  
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

export default AddSub;