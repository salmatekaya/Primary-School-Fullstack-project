import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";
import Administration from "./pages/Administration/Administration";

import ClassMangement from "./pages/Administration/ClassMangement/ClassMangement";

import PersonalInfoA from "./pages/Administration/PersonalInfoA/PersonalInfoA";

import SubjectMangement from "./pages/Administration/SubjectMangement/SubjectMangement";

import TeacherMangement from "./pages/Administration/TeacherMangement/TeacherMangement";

import TeacherRecru from "./pages/Administration/TeacherRecru/TeacherRecru";
import Toolbox from "./pages/Administration/Toolbox/Toolbox";

import Teacher from "./pages/Teacher/Teacher";
import PersonalInfoT from './pages/Teacher/PersonalInfos/PersonalInfo';
import Presence from './pages/Teacher/Presence/Presence';
import Statistics from './pages/Teacher/Statistics/Statistics';
import StudentMangement from "./pages/Teacher/StudentMangement/StudentMangement";
import Timetable from './pages/Teacher/Timetable/Timetable';
import LoginAdmin from "./pages/Login/LoginAdmin";
import LoginTeacher from "./pages/Login/LoginTeacher";
import Timetablemanagement from './pages/Administration/TimeTableMangement/Timetablemanagement'
import TeachPage from "./pages/Administration/TimeTableMangement/teacherInfo/TeachPage";
import Studentassignment from "./pages/Teacher/StudentMangement/Studentassignment";


const App = () => {
    return (
    <div>
        <Router>
            <div>
            <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/admin" exact component={Administration} />
                    <Route path="/admin/infos" exact component={PersonalInfoA} />

                    <Route path="/admin/classmanagement" exact component={ClassMangement} />

                    <Route path="/admin/teachermanagemnet" exact component={TeacherMangement} />

                    <Route path="/admin/subjectmanagemnet" exact component={SubjectMangement} />

                    <Route path="/admin/teacherrecru" exact component={TeacherRecru} />
                    <Route path="/admin/timetablemanagemnet/:id" exact component={Timetablemanagement} />
                    <Route path="/admin/teachertimetable" exact component={TeachPage}/>
                    <Route path="/admin/tools" exact component={Statistics}/>


                    <Route path="/teacher/:id" exact component={Teacher} />
                    <Route path="/infos/:id" exact component={PersonalInfoT} />
                    <Route path="/teacher/p/presence" exact component={Presence} />
                    <Route path="/teacher/t/stat" exact component={Statistics} />
                    <Route path="/studentmangement/StudentMangement" exact component={StudentMangement} />
                    <Route path="/teacher/studentassignment/:id" exact component={Studentassignment}/>
                    <Route path="/teacher/t/timetable" exact component={Timetable} />

                    <Route path="/Login/LoginAdmin" exact component={LoginAdmin} />
                    <Route path="/Login/LoginTeacher" exact component={LoginTeacher} />
                </Switch>
            </div>
        </Router>
    </div>
    
    );

};

export default App;