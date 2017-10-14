import Nightmare = require('nightmare');
import test from 'ava';

test('load index.html', async (t) => {
  const nightmare = Nightmare({
     show: false,
     width: 360,
     height: 640
  });
  const result = await nightmare
    .on('console', (log, msg) => {
      console.log(msg);
    })
    .goto('file:// ' + process.cwd() + '/src/test/e2e/resources/index.html')
    .wait(function() {
      return !!window['AppModule'];
    })
    .evaluate(function() {
      return window['AppModule'];
    });
  t.is(result.INJECTED, "injected value for production");
});
