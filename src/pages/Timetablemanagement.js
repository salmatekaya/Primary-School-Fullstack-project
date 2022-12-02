
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import 'date-fns';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import "react-datepicker/dist/react-datepicker.css";
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: "Big Meeting",
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

const Timetablemanagement = () => {
  useEffect(()=>{
    Axios.get("http://localhost:3000/getTimetable").then((response)=>{
     // setTeacherList(response.data);
    });
  },[]);

    const [newEvent, setNewEvent] = useState({ subject: "",date:"",start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const registerSession = () => {
      Axios.post("http://localhost:3000/registerTimetable",{
        jour:newEvent.date,heure_debut:newEvent.start,heure_fin:newEvent.end,matiere:newEvent.subject
    });
    console.log("???");
    setAllEvents([...allEvents, newEvent]); }
   

    return (
        <div className="App">
            <center>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            </center>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
         <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              
                <button stlye={{ marginTop: "10px" }} onClick={registerSession}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
        );
    };
    export default Timetablemanagement 