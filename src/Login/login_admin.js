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
import axios from "axios";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginAdmin() {
  const classes = useStyles();

  const url = "http://localhost:3000"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle_submit = (e) => {
    e.preventDefault();
    console.log("reached");
    axios
      .post("http://192.168.68.110:5000/loginadmin",{
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data === "login") {
          console.log("response", res);
          window.location.replace(
            url+"/dashboard/admin/home/"+email
          );
        } else {
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
          Admin Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_submit}
          >
            Sign In
          </Button>
          <Grid container>
			<Grid item xs>
			  <Link href="/" variant="body2">
				Go Back
			  </Link>
			</Grid>
		  </Grid>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            <Grid container>
            <Grid item>
              <a href="/RegisterStudent">{"Don't have an account? Sign Up"}</a>
            </Grid>
          </Grid>
          </Grid> */}
        </form>
      </div>
      </Container>
      <Box mt={8}>
        <Copyright />
      </Box>
      </>
  );
}