import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import { useEffect } from "react";

import { Helmet } from "react-helmet";

import ReactGA from "react-ga";
ReactGA.initialize("271669041");

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
  console.log(Helmet);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Helmet>
        <meta charSet="utf-8" />

        <title>Els Limpezas</title>
        <link rel="canonical" href="https://elslimpezas.netlify.app" />
        <meta
          name="description"
          content="Serviços de Limpeza,  Prestamos Serviços em: A Els Limpezas está presente na seguintes áreas: Margem Sul do Tejo: Almada, Seixal, Fernão Ferro, Quinta do Conde, Setúbal, Palmela,Azeitão, Aroeira, Costa da Caparica, Sobreda, Charneca da Caparica, Corroios, Sta. Marta, Amora, Fogueteiro, Cruz de Pau, Torre da Marinha, Barreiro, Montijo, Pinhal Novo, Alcochete, Verdizela, Belverde, Marisol, Arrentela."
        />
      </Helmet>
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
