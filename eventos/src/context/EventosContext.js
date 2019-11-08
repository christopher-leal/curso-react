import React, { Component } from "react";
import axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;
class EventosProvider extends Component {
  state = {
    eventos: []
  };
  token = "342PKIV344FTA6SZALJX";

  obtenerEventos = async busqueda => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es-ES`;
    const eventos = await axios.get(url);
    console.log(eventos.data.events);
    this.setState({
      eventos: eventos.data.events
    });
  };
  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
