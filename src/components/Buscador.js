import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDato = (e) => {
    e.preventDefault();

    console.log(this.busquedaRef.current.value);
    const busqueda = this.busquedaRef.current.value;
    this.props.datosBusqueda(busqueda);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDato}>
        <div className="row">
          <div className="form-group col-12">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
            />
            <input
              className="btn btn-lg btn-danger bt-block"
              type="submit"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
