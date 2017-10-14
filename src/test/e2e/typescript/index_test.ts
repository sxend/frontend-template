import Nightmare = require('nightmare');
import test from 'ava';

test('load index.html', async (t) => {
  const nightmare = Nightmare({
    show: false,
    width: 360,
    height: 640
  });
  const message = await nightmare
    .on('console', (log, msg) => {
      console.log(msg);
    })
    .goto('file:// ' + process.cwd() + '/src/test/e2e/resources/index.html')
    .wait(() => {
      return !!window['AppModule'];
    })
    .evaluate(() => {
      return window['AppModule'].getMessage();
    });
  t.is(message, "execute in production");
});
