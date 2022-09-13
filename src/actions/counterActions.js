import dispatcher from '../appDispatcher';
const demoURL = 'https://api.github.com/users';

export function increment() {
	dispatcher.dispatch({
		actionTypes: 'INCREMENT',
	});
}

export function decrement() {
	dispatcher.dispatch({
		actionTypes: 'DECREMENT',
	});
}

export function apiGetCount() {
	// call api...
	fetch(demoURL)
		.then((data) => data.json())
		.then((users) => {
			console.log(`Demo API 的回傳資料：${users}`);
			const counts = users.length;

			dispatcher.dispatch({
				actionTypes: 'SET_INITIAL_COUNT',
				payload: { initialCount: counts },
			});
		});
}
