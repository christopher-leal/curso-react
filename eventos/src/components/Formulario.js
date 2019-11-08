import React, { Component } from "react";
import PropTypes from "prop-types";

import { CategoriasConsumer } from "../context/CategoriaContext";
import { EventosConsumer } from "../context/EventosContext";

class Formulario extends Component {
  state = {
    nombre: "",
    categoria: ""
  };
  //   si el usuario agrega un evento o categoria
  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <EventosConsumer>
        {value => {
          return (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  value.obtenerEventos(this.state);
                }}
              >
                <fieldset className="uk-fieldset uk-margin">
                  <legend className="uk-legend uk-text-center">
                    Busca tu evento por nombre
                  </legend>
                </fieldset>
                <div className="uk-column-1-3@m uk-margin">
                  <div className="uk-margin" uk-margin="true">
                    <input
                      type="text"
                      name="nombre"
                      className="uk-input"
                      placeholder="Nombre de evento o ciudad"
                      onChange={this.obtenerDatosEvento}
                    />
                  </div>
                  <div className="uk-margin" uk-margin="true">
                    <select
                      name="categoria"
                      className="uk-select"
                      onChange={this.obtenerDatosEvento}
                    >
                      <option value="">Selecciona una categoria</option>
                      <CategoriasConsumer>
                        {value => {
                          return value.categorias.map(categoria => (
                            <option
                              key={categoria.id}
                              value={categoria.id}
                              data-uk-form-select
                            >
                              {categoria.name}
                            </option>
                          ));
                        }}
                      </CategoriasConsumer>
                    </select>
                  </div>
                  <div className="uk-margin" uk-margin="true">
                    <input
                      type="submit"
                      className="uk-button uk-button-danger"
                      value="Busca eventos"
                    />
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </EventosConsumer>
    );
  }
}

Formulario.propTypes = {};

export default Formulario;
