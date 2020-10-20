import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Select, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { storage } from "../../../../Firebase/index";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: '2rem'
  },
  accordion: {
    border: "1px solid #ccc",
    padding: "0 '1.5rem"
  },
  heading: {
    fontSize: '1.6rem',
    color: "#ff8b00",
    fontFamily: "'Open sans', sans-serif",
    letterSpacing: 1,
    fontWeight: theme.typography.fontWeightRegular,
    transform: "translateY(6px)"
  },
  formControl: {
    width: "100%",
    transform: "translateY(5px)"
  },
  select: {
    color: "#ff8b00",
    fontFamily: "'Open sans', sans-serif"
  },
  label: {
    color: "#ff8b00",
    fontFamily: "'Open sans', sans-serif"
  },
  error: {
    color: "#ff8b00",
    marginLeft: '1rem',
    fontFamily: "'Open sans', sans-serif"
  },
  dropzone: {
    backgroundColor: "#fff",
    height: '10rem',
    width: '60rem',
    [theme.breakpoints.down(650)]:{
      height: '5rem',
      width: '90%',
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: '1.6rem',
  },
  dropText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '1.8rem'
  }
}));

const GuestInfo = ({ errors, touched, handleChange, values, handleBlur, nidImageHandler, xs, sm }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleImg = file => {
    const image = file[0];
    const uploadTask = storage.ref(`nid/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      err => console.log(err),
      () => {
        storage
          .ref("nid")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            nidImageHandler(url)
          });
      }
    );
  };             
  const expansionHandler = event => {
    if (event.target.value > 0) {
      setExpanded(true);
    }
    if (event.target.value < 1) {
      setExpanded(false);
    }
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={sm ? true : expanded}>
        <ExpansionPanelSummary
          className={classes.accordion}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container justify="space-between">
            <Grid item>
              <Typography className={classes.heading}>Guest</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-number"
                label="No of Guest"
                type="number"
                name="gNo"
                onClick={expansionHandler}
                onChange={handleChange}
                value={values.gNo}
                InputLabelProps={{
                  shrink: true
                }}
                size="small"
                InputLabelProps={{ className: classes.label }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container alignItems="center" spacing={xs ? 2 : 4}>
            <Grid item xs={xs ? 12 : 6}>
              <TextField
                variant="outlined"
                margin="normal"
                required = { values.gNo > 0 ?  true : false}
                fullWidth
                id="gName"
                label="Guest Name"
                name="gName"
                onChange={handleChange}
                value={values.gName}
                InputLabelProps={{ className: classes.label }}
                autoFocus
              />

              {/* validation */}
              {errors.gName && touched.gName ? (
                <div className={classes.error} style={{ marginBottom: '2.5rem' }}>
                  {errors.gName}
                </div>
              ) : null}
            </Grid>
            <Grid item xs={xs ? 12 : 6} style={{marginBottom: xs ? '4rem' : 0}}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                  className={classes.select}
                >
                  Guest Relation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="gRelation"
                  // required = {values.gNo > 0 ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.gRelation}
                  labelWidth={labelWidth}
                >
                  <MenuItem value={"father"}>Father</MenuItem>
                  <MenuItem value={"mother"}>Mother</MenuItem>
                  <MenuItem value={"sister"}>Sister</MenuItem>
                  <MenuItem value={"brother"}>Brother</MenuItem>
                </Select>
              </FormControl>

              {/* validation */}
              {errors.gRelation && touched.gRelation ? (
                <div className={classes.error} style={{ marginBottom: '2.5rem' }}>
                  {errors.gRelation}
                </div>
              ) : null}
            </Grid>
            <Grid xs={12} justify="center" alignItems="center">
              <DropzoneArea
                dropzoneText="Drag and drop your National ID Card or Click"
                dropzoneParagraphClass={classes.dropText}
                dropzoneClass={classes.dropzone}
                onChange={file => handleImg(file)}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default GuestInfo;


// responsive done