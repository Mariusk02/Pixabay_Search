import React from "react";
import Buscador from "./components/Buscador";
import { Component } from "react";
import Resultado from "./components/Resultado";
import "./css/bootstrap.min (3).css"

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll =()=>{
    const elemento = document.querySelector('.jumbotron')
    elemento.scrollIntoView('smooth','start')
  }

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //leer si la pagina es 1, ya no ir hacia atras
    if (pagina === 1) return null;
    //sumar uno a la pagina actual
    pagina--;
    //agregar el cambio al state
    this.setState({
      pagina,
    }, () =>{
      this.consultarApi()
      this.scroll()
    });

    
  };

  paginaSgte = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    //sumar uno a la pagina actual
    pagina++;
    //agregar el cambio al state
    this.setState({
      pagina,
    }, () =>{
      this.consultarApi();
      this.scroll()
    });

    
  };

  consultarApi = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=35311635-ca4ae1336731646c6e4b77320&q=${termino}&per_page=30&page=${pagina}`;
    // console.log(url)

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) =>
        this.setState({
          imagenes: resultado.hits,
        })
      );
  };
  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSgte={this.paginaSgte}
        />
      </div>
    );
  }
}

export default App;
