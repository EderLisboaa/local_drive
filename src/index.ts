import { startServer } from "./server";

async function start() {
  try {
    await startServer();
  } catch (err) {
    console.log(err);
  }
}

start();