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
  container: {
    textAlign: "center",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Services />
      <div className={classes.container}>
        <br />
        <h2>Prestamos Serviços em:</h2>
        <h4> A Els Limpezas está presente na seguintes áreas:</h4>
        <p>Margem Sul do Tejo:</p>
        <div>
          Almada, Seixal, Fernão Ferro, Quinta do Conde, Setúbal, Palmela,
          <br />
          Azeitão, Aroeira, Costa da Caparica, Sobreda, Charneca da Caparica,
          <br />
          Corroios, Sta. Marta, Amora, Fogueteiro, Cruz de Pau, <br />
          Torre da Marinha, Barreiro, Montijo, Pinhal Novo, Alcochete,
          Verdizela,
          <br />
          Belverde, Marisol, Arrentela.
          <br />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
