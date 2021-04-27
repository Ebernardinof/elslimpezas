import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import useWindowPosition from "../hook/useWindowPosition";
import { Button, Card, Container } from "@material-ui/core";

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
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <Container maxWidth="md">
      <h2>CONTACT</h2>
      {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
      <Card>
        <form
          name="contact"
          method="POST"
          action="/contact/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField id="standard-basic" label="name" name="name" /> <br />
          <TextField id="standard-basic" label="email" name="email" /> <br />
          <TextField
            multiline
            id="standard-multiline-static"
            label="message"
            name="message"
          />
          <br />
          <div>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}
