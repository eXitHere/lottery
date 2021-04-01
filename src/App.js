import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router className='App'>
			<Switch>
				<Route
					path='/:name/:number?'
					render={(props) => <Main {...props} />}
				></Route>
			</Switch>
		</Router>
	);
}

const Main = () => {
	let { name, number } = useParams();

	return (
		<div>
			<div className='name'> {name}</div>
			<div className='number_container'>
				{number.split('').map((e) => {
					return <BoxNumber num={e}></BoxNumber>;
				})}
			</div>
			<div className='footer'>powered by eXit-Guy</div>
		</div>
	);
};

const BoxNumber = ({ num }) => {
	const [open, setOpen] = useState(false);
	const clickHandle = () => {
		setOpen(true);
	};
	return (
		<div onClick={clickHandle} className='number'>
			{open && num}
		</div>
	);
};

export default App;
