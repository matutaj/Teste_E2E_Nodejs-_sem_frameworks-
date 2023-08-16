import { describe, before, after, it } from "node:test";

describe("API WorkFlow", () => {
    let _server = {}

    before(async () => {
        _server = (await import("./api")).app
        await new Promise(resolve => _server.once("listening", resolve))
    })
    after(done => _server.close(done))
    it('Should receive not autorized given wrong user and password', async () => {

    })
})