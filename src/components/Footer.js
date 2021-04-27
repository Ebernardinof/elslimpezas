import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Toolbar } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles({
  footerbarWrapper: {
    margin: "0 auto",
    marginTop: 10,
  },
  footerbar: {
    width: "5%",
    margin: "0 auto",
  },
  colorText: {
    // color: "#335C49",
    color: "#fffff",
  },
  rights: {
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  //   const [checked, setChecked] = useState(false);
  //   useEffect(() => {
  //     setChecked(true);
  //   }, []);

  return (
    <div id="footer">
      <Toolbar className={classes.footerbarWrapper}>
        <IconButton className={classes.footerbar}>
          <Scroll to="header" smooth={true}>
            <ArrowUpwardIcon />
            {/* <SortIcon className={classes.icon} /> */}
          </Scroll>{" "}
        </IconButton>
        <IconButton className={classes.footerbar}>
          <Scroll to="services" smooth={true}>
            Serviços
          </Scroll>
        </IconButton>
        <IconButton className={classes.footerbar}>
          <Scroll to="contactForm" smooth={true}>
            Contacto
          </Scroll>
        </IconButton>
      </Toolbar>
      <div className={classes.rights}>
        2021 © All rights reserved Els-Serviços de Limpezas | Powered by
        Ebernardino - tixE
      </div>
    </div>
  );
};
export default Footer;
