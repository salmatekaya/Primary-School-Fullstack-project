import React from 'react';
import './Statistics.css';
import {BarChart, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import Flip from 'react-reveal/Flip';




const Statistics = () => {
    
    
      const data2 = [
       
        { name: 'العدد', إناث: 14,ذكور:12,amt:30 },
        { name: 'نتائج متميزة فوق 15', إناث: 10,ذكور:8,amt:100 },
        { name: 'نتائج اكثر من المتوسط ', إناث: 2,ذكور:4,amt:100 },
        { name: 'نتائج متوسطة ', إناث: 2,ذكور:4,amt:100 },
        { name: 'نتائج ضعيفة   ', إناث: 2,ذكور:4,amt:100 },
      ];

      const data1 = [
       
        { name: 'الأثنين ', إناث: 16,ذكور:12,amt:30 },
        { name: 'الثلاثاء  ', إناث: 16,ذكور:12,amt:100 },
        { name: 'الأربعاء ', إناث: 17,ذكور:12,amt:100 },
        { name: 'الخميس  ',إناث: 14,ذكور:12,amt:100 },
        { name: 'الجمعة ', إناث: 14,ذكور:13,amt:100 },
        { name: ' السبت ', إناث: 14,ذكور:12,amt:30 }
      ];
      
    
    
    return (
       <div className="stat">
          <h1 className='static'>الإحصائيات          </h1>
          <Flip  right duration={2000}>
          <h1 className="classe1"> النتائج</h1>
          </Flip >
           
           <div className="pie1">
           
         <>
         <BarChart
         width={900}
         height={250}
         data={data2}
         margin={{
           
           left: 150,
           
         }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="ذكور" fill="#153f65 " />
         <Bar dataKey="إناث" fill="#c1e3ff " />
       </BarChart>
       </>
         </div>
         <Flip right duration={2000}>
          
      

         <h1 className="classe2">الحضور </h1>
         </Flip>
           
           <div className="pie2">
           
         <BarChart
         width={900}
         height={250}
         data={data1}
         margin={{
           
           left: 150,
          top:25,
           
         }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="ذكور" fill="#153f65 " />
         <Bar dataKey="إناث" fill="#c1e3ff " />
       </BarChart>
       
          
           
           </div>
         

         
        
       
       
       </div>
    );
};

export default Statistics;