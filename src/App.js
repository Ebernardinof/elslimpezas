import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#BEBF33",
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/logo_transparent.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
