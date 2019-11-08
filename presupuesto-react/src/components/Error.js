import React from 'react';

const Error = ({ mensaje }) => {
	return (
		<div>
			<div className="alert alert-danger error">{mensaje}</div>
		</div>
	);
};

export default Error;
