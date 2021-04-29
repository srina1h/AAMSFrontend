//Imports for react compnents/functions
import React, { Component } from "react";
//Imports for porject components
// import { DoctorLayout } from "./UI/doctor_ui";
// import { PatientLayout } from "./UI/patient_ui";
// import { AdminLayout } from "./UI/admin_ui";
// import { SignUp } from "./UI/signup";
import LoginStudent from "./Login/login_student";
import RegisterStudent from "./Login/register_student";
import LoginTeacher from "./Login/login_teacher";
import LoginAdmin from "./Login/login_admin";
import DashboardStudent from "./Dashboard/dashboard_student.js";
import DashboardAdminAttendance from "./Dashboard/dashboard_admin_attendance.js";
import DashboardAdminHome from "./Dashboard/dashboard_admin_home.js";
import DashboardAdminTimeTable from "./Dashboard/dashboard_admin_timetable.js";
// import DashboardTeacher from "./Dashboard/dashboard_teacher.js";
import DashboardTeacher from "./Dashboard/dashboard_teacher_class.js";
import RegisterStudentImage from "./Login/register_student_image.js";

import {Home} from "./home";
// import { Home2 } from "./UI/home2";
import { Route, BrowserRouter } from "react-router-dom";
// import { VitalsTable2 } from "./components/vitalstable2";
//Import for styles
// import "./styles/App.css";

class App extends Component {
  //set host url here

  url = "http://localhost:3000";
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route
            path={"/login/student"}
            exact
            render={(props) => {
              return <LoginStudent/>;
            }}
          />
          <Route
            path="/register/student"
            exact
            render={(props) => {
              return <RegisterStudent/>;
            }}
          />
          <Route
            path="/login/teacher"
            exact
            render={(props) => {
              return <LoginTeacher/>;
            }}
          />
          <Route
            path="/login/admin"
            exact
            render={(props) => {
              return <LoginAdmin/>;
            }}
          />
          <Route
            path="/dashboard/student/:rno"
            exact
            render={(props) => {
              return <DashboardStudent {...props}  />;
            }}
          />
          <Route
            path="/dashboard/admin/home/attendance/:rno"
            exact
            render={(props) => {
              return <DashboardAdminAttendance {...props}  />;
            }}
          />
          <Route
            path="/dashboard/admin/home/:rno"
            exact
            render={(props) => {
              return <DashboardAdminHome {...props}  />;
            }}
          />
          <Route
            path="/dashboard/admin/home/timetable/:rno"
            exact
            render={(props) => {
              return <DashboardAdminTimeTable {...props}  />;
            }}
          />
          <Route
            path="/dashboard/teacher/:rno"
            exact
            render={(props) => {
              return <DashboardTeacher {...props}  />;
            }}
          />
          <Route
            path="/register/student/image/:rno"
            exact
            render={(props) => {
              return <RegisterStudentImage {...props}  />;
            }}

          //  <Route
          //   path="/dashboard/admin/timetable/:c_id"
          //   exact
          //   render={(props) => {
          //     return <DashboardAdminTimeTable {...props}  />;
          //   }}
          // <Route
          //   path="/doctor/:d_id"
          //   exact
          //   render={(props) => {
          //     return <DoctorLayout {...props} url={this.url} />;
          //   }}
          // />
          // <Route
          //   path="/patient/:p_id"
          //   exact
          //   render={(props) => {
          //     return <PatientLayout {...props} url={this.url} />;
          //   }}
          // />
          // <Route
          //   path="/admin/:a_id"
          //   exact
          //   render={(props) => {
          //     return <AdminLayout {...props} url={this.url} />;
          //   }}
          // />
          // <Route
          //   path="/vitals/:p_id"
          //   exact
          //   render={(props) => {
          //     return <VitalsTable2 {...props} url={this.url} />;
          //   }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
