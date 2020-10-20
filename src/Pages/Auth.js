import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MdLockOutline } from "react-icons/md";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { Redirect } from "react-router";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("*Required"),

  password: Yup.string()
    .min(5, "Too Short!")
    .max(7, "Too Long!")
    .required("*Required")
});

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(70deg, #F9ED69 0%, #F9ED69 40%, #F08A5D calc(40% + 1px), #F08A5D 60%, #B83B5E calc(60% + 1px), #B83B5E 70%, #6A2C70 calc(70% + 1px), #6A2C70 100%)",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "rgba(245, 245, 245, 0.81)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    borderRadius: "20px"
  },
  avatar: {
    fontSize: 25,
    margin: theme.spacing(2),
    backgroundColor: "#f39c12"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: "red"
  }
}));

const Auth = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MdLockOutline />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={({ email, password }) => {
              Axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcYwl7NJ3dzpVy6pKxPKNhq6KZpSPjtEs",
                { email, password, returnSecureToken: true }
              )
              .then(response => {
                props.fetchAuth(response.data.idToken, response.data.localId)
                props.history.push('/dashboard');
              });
            }}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  label="Email Address"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <div className={classes.error}>{errors.email}</div>
                ) : null}

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={values.Password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                />

                {errors.password && touched.password ? (
                  <div className={classes.error}>{errors.password}</div>
                ) : null}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
