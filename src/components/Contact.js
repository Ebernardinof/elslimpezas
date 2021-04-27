import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
    minHeight: "100vh",
    // marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  // const checked = useWindowPosition("place-to-visit");

  return (
    <div className={classes.root} id="contactForm">
      <h1>Contact</h1>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact v1" />
        {/* <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p> */}
        <div>
          <FormControl variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              // onChange={handleChange}
              label="Your Name"
              name="name"
              type="text"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              // onChange={handleChange}
              label="Your Email"
              name="email"
              type="email"
            />
          </FormControl>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            name="message"
          />
        </div>

        <p>
          <button type="submit">Send it!</button>
        </p>
      </form>
    </div>
  );
}
