import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, TextField, Modal, useMediaQuery} from "@material-ui/core";
import { MdHourglassEmpty } from "react-icons/md";

import SecondaryText from "../../Typography/Secondary/SecondaryText";
// import Button from "../../Util/Button/Button";
import LineBreak from "../../Util/LineBreak/LineBreak";
import Linta_mam from "../../../Assets/linta_mam.jpg";

import Button from "@material-ui/core/Button";
import ButtonSubmit from "../../../Components/Util/Button/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { db } from "../../../Firebase";

const validSchema = Yup.object().shape({
  id: Yup.string()
    .min(8, "Too Short!")
    .max(10, "Too Long!")
    .required("*Required ! ")
});

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },

  header: {
    textAlign: "center",
    fontSize: 60,
    fontFamily: "'Raleway', sans-serif",
    marginBottom: 15,
    color: "#5471ca"
  },

  name: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    color: "#FF682C",
    fontFamily: "'Open Sans', sans-serif",
    paddingBottom: 5,
    marginBottom: 5,
    borderBottom: "2px solid #ccc",
    letterSpacing: 1,
    fontWeight: 200,
    fontSize: 30
  },

  img: {
    height: "350px",
    width: "100%"
  },

  btn: {
    background: "#ffd46e",
    border: "1px solid #aaa",
    color: "#862929",
    fontSize: 18
  },
  form: {
    width: "100%",
    marginTop: 20
  },
  formControl: {
    width: "100%"
  },
  error: {
    color: "#ff8b00",
    marginLeft: "1rem",
    fontFamily: "'Open sans', sans-serif"
  },
  primary: {
    color: "#00206a",
    font: '100 5rem/5rem "Raleway", Helvetica, Arial, sans-serif',
    fontWeight: 100,
    letterSpacing: 2,
    padding: "4rem 0",
    [theme.breakpoints.down(1080)]: {
      textAlign: "center"
    },
    [theme.breakpoints.down(850)]: {
      font: '100 3rem/3rem "Raleway", Helvetica, Arial, sans-serif',
      padding: "2rem 0",
      textAlign: "center"
    }
  },
  sec: {
    font: '400 1.6rem/4.8rem "Architects Daughter", Helvetica, sans-serif',
    color: "#666",
    display: "block",
    letterSpacing: 1,
    [theme.breakpoints.down(850)]: {
      font: '400 1.6rem/1rem "Architects Daughter", Helvetica, sans-serif',
      padding: "2rem 0",
      textAlign: "center"
    },  
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: '50rem',
    backgroundColor: '#fff',
    padding: "3rem 3rem 1rem 3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[5]
  },
  processIcon: {
    height: "7rem",
    width: "7rem",
    borderRadius: "50%",
    backgroundColor: "#f3f3f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem"
  },
  modalHeadline: {
    marginBottom: ".7rem",
    color: "#150941",
    textTransform: "uppercase",
    fontFamily: "'Open Sans', sans-serif"
  },
  modalBody: {
    fontSize: "1.4rem",
    fontFamily: "'Open Sans', sans-serif",
    textAlign: "center"
  },
  button: {
    transform: "translateY(3.5rem)"
  }

}));

const tiers = [
  {
    name: "Sharmin Linta",
    description: [
      "Organizer, Lecturer",
      "CSE Department",
      "Phone : +8801703-991141"
    ],
    buttonText: "Contact With Her",
    buttonVariant: "outlined",
    img: Linta_mam
  }
];

const RegisteredStudents = () => {
  const classes = useStyles();
  const sm = useMediaQuery(theme => theme.breakpoints.down(1080))
  const [modal, setModal] = React.useState(false);
  const modalClose = () => setModal(false);
  const [message, setMessage] = React.useState('');
  const [ status , setStatus] = React.useState('');
  return (
    <Box p={3}>
      <Box pb={sm ? 2 : 5} pt={sm ? 0 : 3}>
        <Grid container>
          <Grid item sm={sm ? 12 : 6}>
            <SecondaryText
              primary="Registered Students"
              secondary="Ensure Your Registration is Completed or Not"
            />
          </Grid>
          <Grid item container alignItems="center" sm={6}>
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "'Open Sans', sans-serif", display: sm ? 'none' : 'block'}}
            >
              Here you can ensure wheather your registation is completed or not.
              Just search here by your ID number. For any kind of hassle and
              issue about registation contact with Sarmin Linta from support
              section. For any technical issue contact with devolopers fron
              footer.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <LineBreak />

      <Grid container direction={sm ? "column-reverse" : "row"} justify="center" alignItems="center">
        <Grid item sm={sm ? 12 : 5}>
          <Grid
            container
            spacing={5}
            style={{ marginTop: "5rem", marginBottom: "5rem" }}
          >
            {tiers.map(tier => (
              <Grid item key={tier.title}>
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "0 0 6px rgba(0,0,0,0.3)",
                    padding: 10,
                    borderRadius: 5
                  }}
                >
                  <img src={tier.img} className={classes.img} />
                  <CardContent>
                    <div>
                      <h2 className={classes.name}> {tier.name} </h2>
                    </div>
                    <ul>
                      {tier.description.map(line => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      className={classes.btn}
                      color="primary"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item justify="center" alignItems="center" sm={sm ? 12 : 7} style={{marginTop: sm ? '5rem' : 0}}>
          <h4 className={classes.primary}>
            Registration Check
            <span className={classes.sec}>You can check your Registration Status here</span>
          </h4>
          <div>
            <Formik
              initialValues={{ id: "" }}
              validationSchema={validSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values.id);
                db.collection('students').where('id', '==', values.id).get()
                .then(snapshot => { console.log(snapshot.docs)
                  if(snapshot.docs.length > 0 ){
                    snapshot.docs.forEach(doc => {
                     
                      setModal(true)
                      setMessage(`${doc.data().id}-Approved`);
                      setStatus('Request Approved')
                    })
                  }
                  else {
                    
                    setModal(true)
                    setMessage(`${values.id}- Pending`)
                    setStatus(' Request Pending ')
                  }
                  
                }) 
                .catch(e => {
                  console.log('Erro')
                })           
                resetForm();
              }}
            >
              {({ errors, touched, handleChange, handleBlur, values }) => (
                <Form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id}
                    InputLabelProps={{ className: classes.label }}
                    label="ID"
                    type="telephone"
                    id="id"
                  />
                  {errors.id && touched.id ? (
                    <div className={classes.error}>{errors.id}</div>
                  ) : null}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "4rem"
                    }}
                  >
                    <ButtonSubmit type="button">Check Out</ButtonSubmit>
                  </div>
                </Form>
              )}
            </Formik>

          </div>
          <Modal open={modal}>
              <div className={classes.modal}>
                <div className={classes.processIcon}>
                  <MdHourglassEmpty
                    style={{ height: "5rem", width: "5rem", color: "#e58e26" }}
                  />
                </div>
                <Typography variant="h5" className={classes.modalHeadline}>
                  {status}
                </Typography>
                <Typography variant="body1" className={classes.modalBody}>
                  {message}
                </Typography>
                <div className={classes.button}>
                  <ButtonSubmit onClick={modalClose}>Okay</ButtonSubmit>
                </div>
              </div>
            </Modal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisteredStudents;
