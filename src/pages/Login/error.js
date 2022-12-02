import React from 'react';

const Error = (props) => {
   return(
    <div class="ui negative message">
  <i class="close icon"></i>
  <div class="header">
   {props.message}
  </div>
  <p>حــاول مجددا
</p></div> 
   )};

export default Error;