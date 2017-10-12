import test from 'ava';
import {App} from '../../main/typescript/app';

test('App.getMessage', async function (t) {
	t.is(await App.getMessage(), 'message');
});
