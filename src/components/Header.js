import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Avatar from "@material-ui/core/Avatar";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "100%",
    margin: "0 auto",
    color: "#ffffff",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "#ffffff",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#335C49",
    // color: "#ffffff",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: " 5rem",
  },
  colorTitle: {
    // color: "#335C49",
    color: "#fff",
    fontSize: " 5rem",
  },
  goDown: {
    color:
      " linear-gradient(to right, #335c49 10%,#2e9a68 50%,#bebf33 40%, #ffffff 20%)",
    fontSize: "6rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Scroll to="header" smooth={true} className={classes.appbarTitle}>
            <IconButton>
              <Avatar
                alt="Logo"
                src="/assets/els_logo.png"
                className={classes.icon}
              />
              <span className={classes.colorText}></span>
            </IconButton>
          </Scroll>{" "}
          <IconButton>
            <Scroll
              to="services"
              smooth={true}
              className={classes.appbarWrapper}
            >
              Serviços
            </Scroll>
          </IconButton>
          <IconButton>
            <Scroll
              to="contactForm"
              smooth={true}
              className={classes.appbarWrapper}
            >
              Contacto
            </Scroll>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span className="elsTitle">Els Limpezas</span>
          </h1>
          <Scroll to="services" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
