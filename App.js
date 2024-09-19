import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement(
	'div',
	{},
	'Hello cewitgeioyhowhyierhgeioubre'
);

const jsxHeading = (
	<>
		<h1
			id='heading'
			className='head'
		>
			hello world
		</h1>
		<h2>hello</h2>
	</>
);

const Title = () => {
	return <h1>Title</h1>;
};

const HeadingComponent = () => (
	<>
		<Title />
		<h1>Namaste react {Math.floor(Math.random() * 100)}</h1>
		<h1>Namaste react {jsxHeading}</h1>
	</>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
