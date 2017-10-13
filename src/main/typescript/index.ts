
import {App as app} from './app';
const App = window['App'] = window['App'] || {};
App.q = App.q || [];
App.q.forEach(cmd => {
    cmd(app);
});
