import { all } from 'redux-saga/effects';
import { watchProductsActions } from './product';

export default function* rootSaga() {
	yield all([
		watchProductsActions(),
	])
}