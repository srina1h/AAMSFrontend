import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/dashboard_admin_home.css";
import axios from 'axios';

export default class DashboardAdminHome extends Component {

  constructor(props){
    super(props);

    this.state = {
        r_no:props.match.params.rno,
    }
}

updateValues(){
  axios
  .get("http://192.168.68.110:5000/updatetimetable").then((res) => {
    alert("time table updated")
  })
}

  render() {
    
    return (
      <div>
          <div className="mainhome">
            <title>Automated Attendance Management System</title>
            <div>
              <header className="heading" style={{textAlign: "center", paddingTop: "30px", fontSize: "24px"}}>
              <h1>Welcome to admin portal home !</h1>
              </header>
              <br></br>
              <div className="description" style={{textAlign: "center"}}>
                <h3>Welcome ! This system allows students and teachers to access attendance data easily<br/> and enables
                facial recognition based attendnace all within a single portal !</h3> <br/><br/>
              </div>
            </div>
            <div className="timetable" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {window.location.replace("/dashboard/admin/home/timetable/"+this.state.r_no);}}>
              To update timetable click here
              </button><br /><br />
            </div>
              <div className="attendance" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {window.location.replace("/dashboard/admin/home/attendance/"+this.state.r_no);}}>
              To Load attendance click here
              </button><br /><br />
            </div>
              <div className="update" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {this.updateValues();}}>
              Click to Update timetable values 
              </button><br /><br />
            </div>
          </div>
          <footer style={{textAlign: "center"}}>
              Automated Attendance Management System © 2021
          </footer>
      </div>
    );
  }
}