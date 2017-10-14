export module App {
  export const INJECTED = '/* @echo INJECTED */';
  export async function main() {
    console.log(await getMessage());
  }
  export async function getMessage() {
    return "message";
  }
}
