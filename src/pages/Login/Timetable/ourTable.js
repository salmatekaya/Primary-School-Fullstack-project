import React, { useEffect,useState } from "react";
import green from './GestionEmploi.module.css';
import Axios from "axios";


const Table=() => {
  
  const [EmploiList,SetEmploiList]=useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:5000/geta").then((response)=>{
      SetEmploiList(response.data);
    })},[]
  )
    return <div align="center" className={green.gestion}>
    <table id={green.table} >
        <thead>
            <tr id={green.tr}>
               <th id={green.th} scoop="col">السبت</th>
               <th id={green.th} scoop="col">الجمعة</th>
               <th id={green.th} scoop="col">الخميس</th>
               <th id={green.th} scoop="col">الاربعاء</th>
               <th id={green.th} scoop="col">الثلثاء</th>
               <th id={green.th} scoop="col">الاثنين</th>
               <th id={green.th} scoop="col">#</th>
               
            </tr>
        </thead>
        {EmploiList.map( post => {
             return(
                 <tbody>
                     <tr id={green.tr}>
                
                 <td id={green.td}className={post.samedi.length ? green.txt: green.vide}>  {post.samedi}</td>
                 <td id={green.td} className={post.vendredi.length ? green.txt: green.vide}>  {post.vendredi}</td>
                <td  id={green.td} className={post.jeudi.length ? green.txt: green.vide}>  {post.jeudi}</td>
                <td   id={green.td} className={post.mercredi.length ? green.txt: green.vide}>  {post.mercredi}</td>
                <td  id={green.td} className={post.mardi.length ? green.txt: green.vide}>  {post.mardi}</td>
                <td  id={green.td} className={post.lundi.length ? green.txt: green.vide}>  {post.lundi}</td>
                 <td  id={green.td} className={green.time}>      {post.heur}</td>
                
                </tr>
                 </tbody>
             )
            }   )}
    </table>
</div>;

  }


export default Table;