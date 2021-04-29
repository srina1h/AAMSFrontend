import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useParams} from "react-router-dom";
import axios from 'axios';

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


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function DashboardAdminTimeTable() {
  const classes = useStyles();

  const url = "http://localhost:3000"

  const {rno} = useParams() 

  const [section, setSection] = useState("")
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");
  const [subject5, setSubject5] = useState("");

  const link = "http://localhost:3000/dashboard/admin/home/"+rno

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reached");
    axios
      .post("http://192.168.68.110:5000/changetimetable",{
        section: section,
        subject1: subject1,
        subject2: subject2,
        subject3: subject3,
        subject4: subject4,
        subject5: subject5,
      })
      .then((res) => {
        if (res.data === "done") {
          console.log("response", res);
          window.location.replace(
            url+"/dashboard/admin/home/"+rno
          );
        } else{
          alert("ERROR: "+res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (<>
    <Container component="main" maxWidth="xs" style={{'backgroundColor': 'white', 'borderRadius': '5px', 'paddingBottom': '20px'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Timetable for the next day
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="classID"
                name="classID"
                variant="outlined"
                required
                fullWidth
                id="classID"
                label="Enter Class ID"
                autoFocus
                onChange={(e) => setSection(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="subject1"
                name="subject1"
                variant="outlined"
                required
                fullWidth
                id="subject1"
                label="Enter first hour"
                autoFocus
                onChange={(e) => setSubject1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="subject2"
                name="subject2"
                variant="outlined"
                required
                fullWidth
                id="subject2"
                label="Enter second hour"
                autoFocus
                onChange={(e) => setSubject2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="subject3"
                name="subject3"
                variant="outlined"
                required
                fullWidth
                id="subject3"
                label="Enter third hour"
                autoFocus
                onChange={(e) => setSubject3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="subject4"
                name="subject4"
                variant="outlined"
                required
                fullWidth
                id="subject4"
                label="Enter fourth hour"
                autoFocus
                onChange={(e) => setSubject4(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="subject5"
                name="subject5"
                variant="outlined"
                required
                fullWidth
                id="subject5"
                label="Enter fifth hour"
                autoFocus
                onChange={(e) => setSubject5(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Grid container>
			<Grid item xs>
			  <Link href={link} variant="body2">
				Go Back
			  </Link>
			</Grid>
		  </Grid>
          <Grid container justify="flex-end">
          </Grid>
      </div>
    </Container>
    <Box mt={5}>
    <Copyright />
  </Box>
  </>
  );
}