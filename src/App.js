import React, { Component } from "react";

import "./assets/css/Index.css";

import Buscador from "./components/Buscador";
import Resultado from "./components/Resultados";
import Login from "./components/Login.js";
import Header from "./components/Header";

class App extends Component {
  state = { book: "", objeto: [], isLoggedIn: false };

  consultarApi = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.book}`;
    // console.log(url);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ objeto: resultado.items }));
  };

  datosBusqueda = (book) => {
    this.setState(
      {
        book,
      },
      () => {
        this.consultarApi();
      }
    );
    // console.log(busqueda);
  };

  render() {
    return (
      <div>
        <div className="container">
          <Login />
          <div className="jumbotron">
            <Buscador datosBusqueda={this.datosBusqueda} />
          </div>
          <Resultado libros={this.state.objeto} />
        </div>
      </div>
    );
  }
}

export default App;
