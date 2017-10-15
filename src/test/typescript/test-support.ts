const __getPort = require('get-port');
const hoxy = require('hoxy');
const Nightmare = require('nightmare');
const util = require('util');

export namespace TestSupport {
  export async function getPort() {
      return __getPort();
  }
  export async function createProxy(options?: any) {
    const port = await getPort();
    return new Promise<any>((resolve, reject) => {
      const proxy = hoxy.createServer(options).listen(port, "localhost", function(err) {
        if(!!err) {
          return reject(err);
        }
        resolve(proxy);
      });
    });
  }
  export async function closeProxy(proxy: any) {
    return new Promise((resolve, reject) => {
      proxy.close(function(err) { // optional callback
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
  export function createNightmare(options: any = {}) {
    const nightmare = Nightmare(Object.assign({}, {
      show: false,
      width: 360,
      height: 640
    }, options))
    .on('console', (log, msg) => {
      console.log(msg);
    });
    return nightmare;
  }
}
