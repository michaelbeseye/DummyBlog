import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import NavBar from './components/common/NavBar';
import Counter from './pages/Counter';

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/posts" exact component={Posts} />
				<Route path="/counter" exact component={Counter} />
				<Route component={NotFound} />
			</Switch>
		</>
	);
}

export default App;
