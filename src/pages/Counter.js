import React, { useEffect, useState } from 'react';
import counterStore from '../stores/counterStore';
import { increment, decrement, apiGetCount } from '../actions/counterActions';

export default function Counter() {
	const [counter, setCounter] = useState(counterStore.getCount());

	useEffect(() => {
		counterStore.addChangeListener(onChange);
		if (counterStore.getCount() === 0) {
			apiGetCount();
		}
		return () => counterStore.removeChangeListener(onChange);
	}, []);

	const onChange = () => {
		setCounter(counterStore.getCount());
	};

	return (
		<div>
			<h1>Count: {counter}</h1>
			<button onClick={increment}>++</button>
			<button onClick={decrement}>--</button>
			<button onClick={apiGetCount}>跟 API 拿資料</button>
		</div>
	);
}
