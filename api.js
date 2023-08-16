import { once } from "node:events"
import { createServer } from "node:http"

const VALID = {
    user: "matutaJorge",
    password: "1234"
}

async function loginRoute(request, response) {
    const { user, password } = JSON.parse(await once(request, 'data'))
    if (user !== VALID.user || password !== VALID.password) {
        response.writeHead(401)
        response.end(JSON.stringify({ error: 'user invalid!' }))
        return;
    }
    response.end("ok")
}

async function handler(request, response) {

    if (request.url === '/login' && request.method === 'POST') {
        return loginRoute(request, response)
    }
    response.end("Hello World!");
}

const app = createServer(handler)
    .listen(1090, () => console.log("listenign at 1090"))

export { app }