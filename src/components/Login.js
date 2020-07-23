import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      correo: "",
      contraseña: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="Correo"
            value={this.state.correo}
            onChange={this.handleChange}
            placeholder="Correo"
          />
          <br />
          <input
            name="Contraseña"
            value={this.state.contraseña}
            onChange={this.handleChange}
            placeholder="Contraseña"
          />
          <br />

          <button className="btn btn-block btn-secondary">Entrar</button>
        </form>
        <hr />
        <p>
          Tu nombre es: {this.state.nombre} {this.state.apellido}
        </p>
        <p>Tu edad es: {this.state.edad}</p>
        <p>tu genero es: {this.state.genero}</p>
        <hr />
        <h1>Hola {this.state.nombre}</h1>
      </div>
    );
  }
}

export default Login;
