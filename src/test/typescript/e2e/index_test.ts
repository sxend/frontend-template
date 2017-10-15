import Nightmare = require('nightmare');
import test from 'ava';
import {TestSupport} from '../test-support';

test.beforeEach(async t => {
  const proxy = await TestSupport.createProxy();
  t.context.proxy = proxy;
  const nightmare = TestSupport.createNightmare({
    switches : {
      'proxy-server': 'localhost:' + proxy.address().port,
      'ignore-certificate-errors': true,
    }
  });
  t.context.nightmare = nightmare;
});
test.afterEach(async t => {
  const result = await TestSupport.closeProxy(t.context.proxy);
})
test('load index.html', async (t) => {
  const message = await t.context.nightmare
  .goto('file:// ' + process.cwd() + '/src/test/resources/index.html')
  .wait(() => {
    return !!window['AppModule'];
  })
  .evaluate(() => {
    return window['AppModule'].getMessage();
  });
  t.is(message, "execute in production");
});
