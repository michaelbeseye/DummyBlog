import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
const CHANGE_EVENT = 'change';
let _counter = 0;

class CounterStore extends EventEmitter {
	getCount() {
		return _counter;
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

const store = new CounterStore();

dispatcher.register((action) => {
	switch (action.actionTypes) {
		case 'INCREMENT':
			_counter++;
			store.emitChange();
			break;

		case 'DECREMENT':
			_counter--;
			store.emitChange();
			break;

		case 'SET_INITIAL_COUNT':
			_counter = action.payload.initialCount;
			store.emitChange();
			break;
		default:
			store.emitChange();
	}
});

export default store;
