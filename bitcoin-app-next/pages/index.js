import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
const Index = ({ precioBitcoin, noticias }) => (
	<MasterPage>
		<div className="row">
			<div className="col-12">
				<h2>Precio del bitcoin</h2>
				<Precio precio={precioBitcoin} />
			</div>
			<div className="col-md-8">
				<h2>Noticias sobre bitcoin</h2>
				<Noticias noticias={noticias.articles} />
			</div>
			<div className="col-md-4">
				<h2>Proximos eventos bitcoin</h2>
			</div>
		</div>
	</MasterPage>
);
Index.getInitialProps = async () => {
	const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
	const resPrecio = await precio.json();
	const noticias = await fetch(
		'https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-05&sortBy=publishedAt&apiKey=bda246b1cde3447ba47aa967c37202f0&language=es'
	);
	const resNoticias = await noticias.json();

	// const eventos = await fetch(
	// 	'https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&location.address=Mexico&token=342PKIV344FTA6SZALJX'
	// );
	// const resEventos = await eventos.json();
	return {
		precioBitcoin: resPrecio.data.quotes.USD,
		noticias: resNoticias
		// eventos: resEventos
	};
};
export default Index;
