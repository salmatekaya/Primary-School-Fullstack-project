import React, { Component } from "react";

import green from './GestionEmploi.module.css';
import EditTAble from "./EditTable";
import Table from "./ourTable";

class  GestionEmploi extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHide1: true,
      showHide2: false
      
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
 
  hideComponent(name) {
    console.log(name);
       this.setState({ showHide1: !this.state.showHide1 });
        this.setState({ showHide2: !this.state.showHide2 });
            
    }
  

  render() {
    const { showHide1, showHide2 } = this.state;
    const edit = "تغيير";
    const submit = "تسجيل"
    return (
        <div  className={green.background}>
            
        
        <div  className={`${green.tablecontainer}  ${green.gestion}`}> 
          
            {showHide1 && <EditTAble />}
            <hr />
            {showHide2 && <Table />}
            <hr />
            <tfoot align="center">
            <a id={green.plus}  onClick={() => this.hideComponent("showHide1") } class={`${green.btn} ${green.blue} ${green.circular}`} >{this.state.showHide1 ? submit : edit}ر</a> ;

           
            </tfoot>
            
        </div>
        </div>
    );
  };

}
 
export default GestionEmploi;