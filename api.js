import { createServer } from "node:http"

async function handle(request, response) {
    response.end("Hello World!");
}

const app = createServer(handle)
    .listen(1090, () => console.log("listenign at 1000"))

export { app }