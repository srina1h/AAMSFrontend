import React, { useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SettingsApplicationsSharp } from "@material-ui/icons";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


//util functions:
function createData(student, enrollment, percentage) {
    return { student, enrollment, percentage };
  }


export default class DashboardTeacher extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            message:"hello world",
            length_t:null,
            subject_id:null,
            class_id:null,
            enrollment:[],
            percent:[],
            rows:[],
            r_no:props.match.params.rno,
        }
    }
    //bind functions:


    componentDidMount(){
        //api calls here:
        console.log("reached useeffect")
        console.log("useffect rno=",this.state.r_no)

        axios
            .post("http://192.168.68.110:5000/teacherdashboard",{
                rno: this.state.r_no,
            })
            .then((response) => {
                console.log("reached")
                console.log(response.data);
               
                this.setState({
                    class_id:response.data["class"],
                    subject_id:response.data["subject"],
                    percent:response.data["percent"],
                    enrollment:response.data["enrollment"],
                    length_t:response.data["enrollment"].length,
                })
               
                let rows1 = [];
                for(let k = 0; k<this.state.length_t; k++){
                    let y = k.toString()
                    rows1.push(createData(k, this.state.enrollment[y], this.state.percent[k]))
                }

                this.setState({
                    rows:rows1,
                })
                console.log("rowsset", this.state.rows)
            }).catch((e)=>{console.log("error= ",e)});
    }

    
    render() {
      return (
      <>
      <div align = "center"><h1> Welcome Prof {this.state.r_no}</h1></div>
        <div align = "center"><h2> Your subject is: {this.state.subject_id}</h2></div><br />
        <div align = "center"><h3> Attendance for class: {this.state.class_id}</h3></div>
        <br />
        <TableContainer style={{'width': "500px", 'marginLeft': '700px'}} component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><b>Enrollment&nbsp;No</b></TableCell>
                <TableCell align="center"><b>Attendance&nbsp;%</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row) => (
                <TableRow >
                  <TableCell align="center">{row.enrollment}</TableCell>
                  <TableCell align="center">{row.percentage}</TableCell>
                </TableRow>
              ))}
              
            </TableBody>
          </Table>
        </TableContainer> <br /><br />
        <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Automated Attendance Management System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
   
      </>);
    }
  }