const Precio = ({ precio }) => {
	return (
		<div className="card text-white bg-success mb-3">
			<div className="card-header">Precio del bitcoin</div>
			<div className="card-body">
				<h4 className="card-title">Precio Actual: {precio.price}</h4>
				<div className="d-md-flex justify-content-between">
					<p className="card-text">
						<span className="font-weight-bold">Ultima Hora: </span>
						{precio.percent_change_1h}%
					</p>
					<p className="card-text">
						<span className="font-weight-bold">
							Ultimas 24 hrs:
						</span>
						{precio.percent_change_24h}%
					</p>
					<p className="card-text">
						<span className="font-weight-bold">
							Ultimos 7 dias:
						</span>
						{precio.percent_change_7d}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Precio;
