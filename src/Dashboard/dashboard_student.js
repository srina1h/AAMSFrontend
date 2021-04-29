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
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    table: {
      
    },
  });
  
  function createData(metric, subject1, subject2, subject3, subject4, subject5, subject6) {
    return { metric, subject1, subject2, subject3, subject4, subject5, subject6 };
  }
  
  function Copyright() {
    return (
      <Typography variant="body2" style={{'color': 'white'}} align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/">
          Automated Attendance Management System
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default function DashboardStudent(props){

    const classes = useStyles();
    const {rno} = useParams()

    const [percent,setPercent] = useState("");
    const [mean,setMean] = useState("");
    const [stddev,setStddev] = useState("");
    useEffect((rno)=>{
        axios
            .post("http://192.168.68.110:5000/studentdashboard",{
                rno:rno,
            })
            .then((response) => {
                console.log("reached")
                console.log(response.data);
                setPercent(response.data["percent"]);
                setMean(response.data["mean"]);
                setStddev(response.data["stddev"]);
                // console.log(res["percent"]["0"])
                console.log(percent);
            }).catch((e)=>{console.log("error= ",e)});
    },[])
    
    const rows = [
        createData('Percentage', percent["0"],percent["1"],percent["2"],percent["3"],percent["4"],percent["5"]),
        createData('Mean', mean["0"],mean["1"],mean["2"],mean["3"],mean["4"],mean["5"]),
        createData('Standard deviation', stddev["0"],stddev["1"],stddev["2"],stddev["3"],stddev["4"],stddev["5"]),
      ];

    return (
        <div>
        <div align = "center"><h1> Welcome Student {rno}</h1></div><br /><br />
        <div align='center'><h3> Your attendance: </h3></div>
        <TableContainer component={Paper} style={{'width': '1125px', 'marginLeft': '375px'}}>
          <Table className={classes.table} aria-label="simple table" style={{'width': '100px'}}>
            <TableHead>
              <TableRow>
                <TableCell><b>Metric</b></TableCell>
                <TableCell align="right"><b>Subject&nbsp;1</b></TableCell>
                <TableCell align="right"><b>Subject&nbsp;2</b></TableCell>
                <TableCell align="right"><b>Subject&nbsp;3</b></TableCell>
                <TableCell align="right"><b>Subject&nbsp;4</b></TableCell>
                <TableCell align="right"><b>Subject&nbsp;5</b></TableCell>
                <TableCell align="right"><b>Subject&nbsp;6</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.metric}>
                  <TableCell component="th" scope="row">
                  <b>{row.metric}</b>
                  </TableCell>
                  <TableCell align="right">{row.subject1}</TableCell>
                  <TableCell align="right">{row.subject2}</TableCell>
                  <TableCell align="right">{row.subject3}</TableCell>
                  <TableCell align="right">{row.subject4}</TableCell>
                  <TableCell align="right">{row.subject5}</TableCell>
                  <TableCell align="right">{row.subject6}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={8}>
        <Copyright />
        </Box>
        </div>
      );
}