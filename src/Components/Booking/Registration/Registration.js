// responsive done
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Modal,
  Typography,
  useMediaQuery
} from "@material-ui/core";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MdHourglassEmpty } from "react-icons/md";

import GuestInfo from "./GuestInfo/GuestInfo";
import Button from "../../Util/Button/Button";
import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";
import { db } from "../../../Firebase";

const phoneRegExp = /^(?:\+88|01)?\d{11}\r?$/;
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*Required"),
  batch: Yup.string().required("*Required"),
  department: Yup.string().required("*Required"),
  id: Yup.string()
    .min(8, "Too Short!")
    .max(9, "Too Long!")
    .required("*Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(12, "Too Long!")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("*Required")
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: 20
  },
  formControl: {
    width: "100%"
  },
  select: {
    color: "#ff8b00",
    fontFamily: "'Open sans', sans-serif"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  label: {
    color: "#ff8b00",
    fontFamily: "'Open sans', sans-serif"
  },
  error: {
    color: "#ff8b00",
    marginLeft: "1rem",
    fontFamily: "'Open sans', sans-serif"
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: '50rem',
    backgroundColor: theme.palette.background.paper,
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

const Registration = () => {
  const classes = useStyles();
  const sm = useMediaQuery(theme => theme.breakpoints.down(650));
  const xs = useMediaQuery(theme => theme.breakpoints.down(450));

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const [modal, setModal] = React.useState(false);
  const modalClose = () => setModal(false);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [nidImage, setNidImage] = useState("");
  const nidImageHandler = url => setNidImage(url);

  return (
    <Formik
      initialValues={{
        name: "",
        batch: "",
        department: "",
        id: "",
        phone: "",
        gName: "",
        gRelation: "",
        gNo: 0
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        const data = { ...values, nidImage, isApproved: false };
        if (
          values.gNo > 0 &&
          (nidImage === "" || values.gName === "" || values.gRelation === "")
        )
          return;

        db.collection('students').add(data)
        .then(() => {
            resetForm();
            setModal(true);
        })
        .catch(err => {
            alert("Couldn't Submit Form" + err);
        });

      }}
    >
      {({ errors, touched, handleChange, values, handleBlur }) => (
        <Box pt = {sm ? 3:5} pb = {sm ? 2:5}>
          <SecondaryText
            primary="Registration Form"
            secondary="Please fill up the form"
          />
          <LineBreak />

          <Container
            component="main"
            maxWidth="md"
            style={
              sm
                ? { padding: "0rem 3rem 5rem" }
                : { padding: "5rem 5rem 2rem 5rem" }
            }
          >
            <Form className={classes.form} noValidate>
              <Grid
                container
                spacing={xs ? 0 : 2}
              >
                <Grid item xs={12} style={{marginBottom: !xs ? 0 : '2.5rem'}}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    InputLabelProps={{ className: classes.label }}
                    style={{ marginBottom: xs ? 0 : "2rem" }}
                  />
                  {/* validation */}
                  {errors.name && touched.name ? (
                    <div
                      className={classes.error}
                      style={{ transform: "translateY(-2rem)" }}
                    >
                      {errors.name}
                    </div>
                  ) : null}
                </Grid>
                <Grid item xs={xs ? 12 : 6} style={{marginBottom: !xs ? 0 : '2.5rem'}}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      className={classes.select}
                      InputLabelProps={{ className: classes.label }}
                    >
                      Batch
                    </InputLabel>
                    <Select
                      name="batch"
                      className={classes.formControl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.batch}
                      labelWidth={labelWidth}
                    >
                      <MenuItem value={161}>161</MenuItem>
                      <MenuItem value={162}>162</MenuItem>
                      <MenuItem value={163}>163</MenuItem>
                      <MenuItem value={171}>171</MenuItem>
                      <MenuItem value={172}>172</MenuItem>
                      <MenuItem value={173}>173</MenuItem>
                      <MenuItem value={181}>181</MenuItem>
                      <MenuItem value={182}>182</MenuItem>
                      <MenuItem value={183}>183</MenuItem>
                      <MenuItem value={191}>191</MenuItem>
                      <MenuItem value={192}>192</MenuItem>
                      <MenuItem value={193}>193</MenuItem>
                      <MenuItem value={201}>201</MenuItem>
                    </Select>
                  </FormControl>
                  {/* validation */}
                  {errors.batch && touched.batch ? (
                    <div className={classes.error}>{errors.batch}</div>
                  ) : null}
                </Grid>
                <Grid item xs={xs ? 12 : 6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel
                      className={classes.select}
                      ref={inputLabel}
                      id="demo-simple-select-outlined-label"
                    >
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      name="department"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.department}
                      labelWidth={labelWidth}
                    >
                      <MenuItem value={"042"}>CSE - (042)</MenuItem>
                      <MenuItem value={"043"}>CSIT - (043)</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.department && touched.department ? (
                    <div className={classes.error}>{errors.department}</div>
                  ) : null}
                </Grid>
                <Grid item xs={xs ? 12 : 6}>
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
                </Grid>
                <Grid item xs={xs ? 12 : 6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    label="Phone Number"
                    InputLabelProps={{ className: classes.label }}
                    type="telephone"
                    id="phone"
                  />
                  {errors.phone && touched.phone ? (
                    <div className={classes.error}>{errors.phone}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <GuestInfo
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    values={values}
                    handleBlur={handleBlur}
                    nidImageHandler={nidImageHandler}
                    xs={xs}
                    sm={sm}
                  />
                </Grid>
              </Grid>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "4rem"
                }}
              >
                <Button type="button">Submit</Button>
              </div>
            </Form>
            <Modal open={modal}>
              <div className={classes.modal}>
                <div className={classes.processIcon}>
                  <MdHourglassEmpty
                    style={{ height: "5rem", width: "5rem", color: "#e58e26" }}
                  />
                </div>
                <Typography variant="h5" className={classes.modalHeadline}>
                  Registration Pending
                </Typography>
                <Typography variant="body1" className={classes.modalBody}>
                  To complete registration please complete your Payment to{" "}
                  <b>Sharmin Rashid</b>, Dept of CSE or corresponding <b>CR</b>.
                </Typography>
                <div className={classes.button}>
                  <Button onClick={modalClose}>Okay</Button>
                </div>
              </div>
            </Modal>
          </Container>
        </Box>
      )}
    </Formik>
  );
};

export default Registration;
