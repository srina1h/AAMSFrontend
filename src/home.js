import { Link } from "react-router-dom";
import React, {Component} from 'react'
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div class="maindiv">
          <div className="mainhome">
            <title>Automated Attendance Management System</title>
            <div>
              <header className="heading" style={{textAlign: "center", paddingTop: "30px", fontSize: "24px"}}>
              <h1>Automated Attendance Management System</h1>
              </header>
              <div className="description" style={{textAlign: "center", paddingTop: "30px", fontSize: "24px"}}>
                <h3>Welcome! This system allows students and teachers to access attendance data easily <br /> and enables
                facial recognition based attendance<br /> all within a single portal !</h3>
              </div>
            </div>
            <div class = "buttonpos">
            
            <div className="signinstudent" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {window.location.replace("/login/student");}}>
              Do you have an account? Log in
              </button>
            </div>
            <div className="signupstudent" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {window.location.replace("/register/student");}}>
              Are you a new student? Sign Up!
              </button>
            </div>
            <div className="signinteacher" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {window.location.replace("/login/teacher");}}>
              Are you a teacher? Login here!
              </button>
            </div>
            <div className="signinadmin" style={{textAlign: "center"}}>
              <button className = "btn-grad" onClick={()=> {window.location.replace("/login/admin");}}>
              Admins?<br/> 
              Login here!
              </button>
            </div>
            </div>
          </div>
          <br/><br/><br/>
          <footer style={{textAlign: "center"}}>
              Automated Attendance Management System © 2021
          </footer>
      </div>
    );
  }
}