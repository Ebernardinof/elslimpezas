import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Card, Container, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    maxWidth: 645,
    backgroundColor: "#BEBF33",
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#335C49",
    "&:hover": {
      backgroundColor: "#BEBF33",
    },
    // #335C49
  },
  fields: {
    marginTop: 30,
    margin: theme.spacing(1),
    width: 400,
    // backgroundColor: "#BEBF33",
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
    <Container maxWidth="md" className={classes.contactForm} id="contactForm">
      <h2>CONTACT</h2>
      {success && (
        <h3 style={{ color: "#335C49" }}>Thanks for your message! </h3>
      )}
      <Card>
        <form
          name="contact"
          method="POST"
          action="/contact/ "
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            id="standard-basic"
            label="Nome"
            name="name"
            className={classes.fields}
          />{" "}
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            className={classes.fields}
          />{" "}
          <br />
          <TextField
            multiline
            id="standard-multiline-static"
            label="Mensagem"
            name="message"
            className={classes.fields}
          />
          <br />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              Send
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}
