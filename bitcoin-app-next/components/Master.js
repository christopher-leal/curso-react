import Head from 'next/head';
import Navegacion from './Navegacion';

const MasterPage = (props) => (
	<div>
		<Head>
			<meta charset="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<link
				rel="stylesheet"
				href="https://bootswatch.com/4/sketchy/bootstrap.min.css"
			/>

			<title>Bitcoin App</title>
		</Head>
		<Navegacion />
		<div className="container mt-4">{props.children}</div>
	</div>
);

export default MasterPage;
