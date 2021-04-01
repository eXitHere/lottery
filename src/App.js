import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	HashRouter,
} from 'react-router-dom';

function App() {
	return (
		<HashRouter basename='/' className='App'>
			<Switch>
				<Route exact path='/:name?/:number?' component={Main}></Route>
			</Switch>
		</HashRouter>
	);
}

const Main = (props) => {
	// console.log(props.match);
	return (
		<div>
			<div className='name'> {props.match.params.name}</div>
			<div className='number_container'>
				{props.match.params.number.split('').map((e) => {
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
