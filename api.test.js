import { describe, before, after, it } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
const BASE_URL = 'http://localhost:1090'
describe("API WorkFlow", () => {
    let _server = {}

    before(async () => {
        _server = (await import("./api.js")).app
        await new Promise(resolve => _server.once("listening", resolve))
    })
    after(done => _server.close(done))
    it('Should receive not autorized given wrong user and password', async () => {
        const data = {
            user: "matutajorge",
            password: ""
        }
        const request = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        strictEqual(request.status, 401)
        const response = await request.json()
        deepStrictEqual(response, { error: 'User invalid!' })
    })
})