import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CategoriaContext = React.createContext();
export const CategoriasConsumer = CategoriaContext.Consumer;

class CategoriaProvider extends Component {
  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es-ES`;
    let categorias = await axios.get(url);
    this.setState({
      categorias: categorias.data.categories
    });
  };

  token = "342PKIV344FTA6SZALJX";
  state = {
    categorias: []
  };
  render() {
    return (
      <CategoriaContext.Provider
        value={{
          categorias: this.state.categorias
        }}>
        {this.props.children}
      </CategoriaContext.Provider>
    );
  }
}

CategoriaContext.propTypes = {};

export default CategoriaProvider;
