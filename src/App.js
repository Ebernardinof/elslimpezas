import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/resizeimage.png"
    })`,
    backgroundColor: "#BEBF33",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    justifyContent: "center",
    // backgroundSize: "cover",
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
      {/* <header className="App-header">Els Limpezas</header> */}
    </div>
  );
}

export default App;
