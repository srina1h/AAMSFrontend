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

export default function SignUp() {
  const classes = useStyles();

  const url = "http://localhost:3000"

  const [name, setName] = useState("");
  const [regno, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [class_id, setClassID] = useState("");
  const [no_subj, setNoSubj] = useState("");

  const handleSubmit = () => {
    //console.log("here");
    localStorage.setItem("name", name);
    localStorage.setItem("regno", regno);
    localStorage.setItem("password", password);
    localStorage.setItem("class_id", class_id);
    localStorage.setItem("no_subj", no_subj);
    window.location.replace(
      url+"/register/student/image/"+regno
    );
  }

  return (<>
    <Container component="main" maxWidth="xs" style={{'backgroundColor': 'white', 'borderRadius': '5px', 'paddingBottom': '20px'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Sign up
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="roll"
                label="Registration number (Your Username)"
                name="roll"
                autoComplete="roll"
                onChange={(e) => setReg(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="classid"
                label="Class ID"
                name="classid"
                autoComplete="classid"
                onChange={(e) => setClassID(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nosubject"
                label="Number of Subjects"
                name="nosubject"
                autoComplete="nosubject"
                onChange={(e) => setNoSubj(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
            <Grid container>
            <Grid item>
              <a href="/login/student">{"Already registered? Sign In"}</a>
            </Grid>
          </Grid>
          </Grid>
      </div>
    </Container>
    <Box mt={5}>
    <Copyright />
  </Box>
  </>
  );
}