import React from 'react';

const Informacion = ({ info }) => {
	// if (info) return null;
	if (Object.keys(info).length === 0) return null;
	return (
		<div>
			<div className="card border-light">
				<div className="card-header bg-primary text-light font-weight-bold">
					Informacion Artista
				</div>
				<div className="card-body">
					<img src={info.strArtistThumb} alt="Logo artista" />
					<p className="card-text">Genero: {info.strGenre}</p>
					<h2 className="card-text text-center">Biografia</h2>
					<p className="card-text">{info.strBiographyES}</p>
					<p className="card-text">
						<a
							href={`https://${info.strFacebook}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook" />
						</a>
						<a
							href={`https://${info.strTwitter}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter" />
						</a>
						<a
							href={`${info.strLastFMChart}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-lastfm" />
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Informacion;
