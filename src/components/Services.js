import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/services";
import useWindowPosition from "../hook/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
function ShowServices() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="services">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[2]} checked={checked} />
    </div>
  );
}
export default ShowServices;
