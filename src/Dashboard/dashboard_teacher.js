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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(student, enrollment, percentage) {
    return { student, enrollment, percentage };
  }

export default function DashboardTeacher(props){
    console.log("props = ", props)


    const classes = useStyles();
    //const [rno, setRno] = useState("");
    const r_no = props.match.params.rno
    //const {r_no} = useParams()
    console.log(" rno=",r_no)
    const [percent,setPercent] = useState("");
    const [enrollment,setEnrollment] = useState("");
    const [class_id,setClass] = useState("");
    const [subject_id,setSubject] = useState("");
    const [length_t,setLength] = useState("");

    const [rows, setRows] = useState([]);
    
    useEffect(()=>{
        //setRno(props.match.params.rno)
        //let rno = props.match.params.rno
        console.log("reached useeffect")
        console.log("useffect rno=",r_no)

        axios
            .post("http://192.168.68.110:5000/teacherdashboard",{
                rno: r_no,
            })
            .then((response) => {
                console.log("reached")
                console.log(response.data);
                setClass(response.data["class"]);
                setSubject(response.data["subject"]);
                setPercent(response.data["percent"]);
                setEnrollment(response.data["enrollment"]);
                setLength(response.data["enrollment"].length);
                console.log(percent.length)
                console.log(percent)
               
                console.log(enrollment)
                let rows1 = []
                for(let k = 0; k<length_t; k++){
                    let y = k.toString()
                    rows1.push(createData(k, enrollment[y], percent[k]))
                }
                setRows(rows1);
                console.log("rowsset", rows)
            }).catch((e)=>{console.log("error= ",e)});
    },[r_no])

    let obj=null;
    if(rows!=null){
      obj = (rows.map((row) => (
        <TableRow >
          <TableCell align="left">{row.enrollment}</TableCell>
          <TableCell align="right">{row.percentage}</TableCell>
        </TableRow>
      )))
    }
    return (
        <div>
        <div align = "center"><h1> Welcome Prof {r_no}</h1></div>
        <div align = "center"><h2> Your subject is: {subject_id}</h2></div>
        <div align = "center"><h3> Attendance for class: {class_id}</h3></div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Enrollment&nbsp;No</TableCell>
                <TableCell align="right">Attendance&nbsp;%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {obj}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      );
}