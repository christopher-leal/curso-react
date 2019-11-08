import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error';

const Form = ({ setMoneda, setCripto }) => {
	const [ criptos, setCriptos ] = useState([]);
	const [ moneda, setMonedaCotizar ] = useState('');
	const [ criptoCotizar, setCriptoCotizar ] = useState('');
	const [ error, setError ] = useState(false);

	const consultarApi = async () => {
		const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${'10'}&tsym=${'USD'}`;
		const resultado = await axios(url);
		setCriptos(resultado.data.Data);
	};
	useEffect(() => {
		consultarApi();
	}, []);
	const cotizarMoneda = (e) => {
		e.preventDefault();
		if (moneda === '' || criptoCotizar === '') {
			setError(true);
			return;
		}
		setCripto(criptoCotizar);
		setMoneda(moneda);
		setError(false);
	};
	const componente = error && (
		<Error mensaje="Ambos campos son obligatorios" />
	);
	return (
		<form onSubmit={cotizarMoneda}>
			{componente}
			<div className="row">
				<label htmlFor="">Elige tu moneda</label>
				<select
					className="u-full-width"
					onChange={(e) => setMonedaCotizar(e.target.value)}
				>
					<option value="">Elige tu moneda</option>
					<option value="USD">Dolar estadounidense</option>
					<option value="MXN">Peso mexicano</option>
					<option value="GBP">Libras</option>
					<option value="EUR">Euro</option>
				</select>
			</div>
			<div className="row">
				<label htmlFor="">Elige tu criptomoneda</label>
				<select
					className="u-full-width"
					onChange={(e) => setCriptoCotizar(e.target.value)}
				>
					<option value="">Elige tu criptomoneda</option>
					{criptos.map((cripto) => (
						<Criptomoneda
							key={cripto.CoinInfo.Id}
							cripto={cripto}
						/>
					))}
				</select>
			</div>
			<button className="u-full-width button-primary" type="submit">
				Cotizar
			</button>
		</form>
	);
};

export default Form;
