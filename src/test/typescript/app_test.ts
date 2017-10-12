import test from 'ava';
import {App} from '../../main/typescript/app';

test('app', t => {
	t.pass();
});

test('bar', async function (t) {
	t.is(await App.getMessage(), 'message');
});
