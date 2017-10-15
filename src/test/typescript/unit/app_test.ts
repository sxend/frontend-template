import test from 'ava';
import { App } from '../../../main/typescript/app';

test('App.getMessage', async function(t) {
  const message = await App.getMessage();
  t.truthy(message);
  t.regex(message, /^execute in /);
});
