export module App {
  export const ENVIRONMENT = '/* @echo ENVIRONMENT */';
  export async function main() {
    const message = await getMessage();
    console.log(message);
  }
  export async function getMessage() {
    return "execute in " + App.ENVIRONMENT;
  }
}
