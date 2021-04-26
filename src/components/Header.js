import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "95%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    // color: "#335C49",
    color: "#fffff",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#ffffff",
    fontSize: "4rem",
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
            <h1 className={classes.appbarTitle}>
              Els<span className={classes.colorText}> Limpezas</span>
            </h1>
          </Scroll>{" "}
          <IconButton>
            <Scroll to="header" smooth={true}>
              <SortIcon className={classes.icon} />
            </Scroll>{" "}
          </IconButton>
          <IconButton>
            <Scroll to="place-to-visit" smooth={true}>
              Services
            </Scroll>
          </IconButton>
          <IconButton>
            <Scroll to="contact" smooth={true}>
              Contact
            </Scroll>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={150}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Els<span className={classes.colorText}> Limpezas</span>
          </h1>
        </div>
        <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
}
