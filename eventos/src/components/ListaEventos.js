import React from 'react';
import PropTypes from 'prop-types';
import { EventosConsumer } from '../context/EventosContext';
import Evento from './Evento';

const ListaEventos = (props) => {
	return (
		<div className="uk-child-width-1-3@m" uk-grid="true">
			<h1>Resultados</h1>
			<EventosConsumer>
				{(value) => {
					return value.eventos.map((evento) => <Evento key={evento.id} evento={evento} />);
				}}
			</EventosConsumer>
		</div>
	);
};

ListaEventos.propTypes = {};

export default ListaEventos;
