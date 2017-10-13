import {Promise as ES6Promise} from 'es6-promise';

export module App {
  export async function main() {
    console.log(await getMessage());
  }
  export async function getMessage() {
    return "message";
  }
}
