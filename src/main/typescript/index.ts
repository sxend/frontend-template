
import { App as app } from './app';
const App = window['App'] = window['App'] || {};
App.q = App.q || [];

function consumeQueue() {
  while (App.q.length > 0) {
    App.q.shift()(app);
  }
  setTimeout(consumeQueue, 10);
}
consumeQueue();
