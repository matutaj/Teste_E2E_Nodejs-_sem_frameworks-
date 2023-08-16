import { once } from "node:events"
import { createServer } from "node:http"

const VALID = {
    user: "matutajorge",
    password: "1234"
}

async function loginRoute(request, response) {
    const { user, password } = JSON.parse(await once(request, 'data'))
    console.log({ user, password })
    response.end("ok")
}

async function handle(request, response) {

    if (request.url === '/login' && request.method === 'POST') {
        return loginRoute(request, response)
    }
    response.end("Hello World!");
}

const app = createServer(handle)
    .listen(1090, () => console.log("listenign at 1000"))

export { app }