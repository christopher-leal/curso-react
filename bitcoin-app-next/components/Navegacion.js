import Link from 'next/link';
const Navegacion = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<div className="container">
			<Link href="/">
				<a className="navbar-brand">Bitcoin</a>
			</Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link href="/">
							<a className="nav-link">Inicio</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/nosotros">
							<a className="nav-link">Nosotros</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navegacion;
