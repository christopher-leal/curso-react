import React from "react";
import PropTypes from "prop-types";

const Evento = ({ evento }) => {
  // extraer el texto
  let { text } = evento.description;
  if (text) {
    if (text.length > 250) {
      text.substr(0, 250);
    }
  } else {
    text = null;
  }
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {evento.logo && <img src={evento.logo.url} alt={evento.name} />}
        </div>
        <div className="uk-card-body">
          <div className="uk-card-title">{evento.name.text}</div>
          {text}
        </div>
        <div className="uk-card-footer">
          <a
            href={evento.url}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-button uk-button-secondary"
          >
            Mas informacion
          </a>
        </div>
      </div>
    </div>
  );
};

Evento.propTypes = {};

export default Evento;
