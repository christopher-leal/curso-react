const Noticia = ({ noticia }) => {
	let imagen;
	if (noticia.urlToImage !== '') {
		imagen = (
			<img
				src={noticia.urlToImage}
				alt={noticia.title}
				className="card-img-top"
			/>
		);
	} else {
		imagen = <p className="text-center my-5">Imagen no disponible</p>;
	}
	return (
		<div className="col-md-6 col-12 mb-4">
			<div className="card">
				<div className="card-image">{imagen}</div>
			</div>
			<div className="card-body">
				<h3 className="card-title">{noticia.title}</h3>
				<p className="card-text">{noticia.description}</p>
				<p className="card-text">{noticia.source.name}</p>
				<a
					href={noticia.url}
					target="_blank"
					className="btn btn-primary d-block"
				>
					Leer noticia
				</a>
			</div>
		</div>
	);
};

export default Noticia;
