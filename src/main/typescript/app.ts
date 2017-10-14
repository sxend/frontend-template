export module App {
  export async function main() {
    console.log(await getMessage());
  }
  export async function getMessage() {
    return "message";
  }
}
