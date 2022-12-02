import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles= makeStyles(theme=>({
    dialogWrapper:{
        padding:theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))
export default function Popup(props){
    const {title, children, openPopup, setOpenPopup}=props;
    const classes=useStyles;

    return(
        <Dialog open={openPopup} maxWidth="md" classes={{paper:classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display:'flex'}}>
                    <Typography variant="h6" component="div" style={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    <button onClick={()=>{setOpenPopup(false)}} class="circular ui icon button">
                        <i class="icon close"></i>
                    </button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}