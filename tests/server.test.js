const { request } = require('supertest');
const {app} = require('../src/server');

describe("Home page route shows an eorror", () => {

    it("Server returns an object with a message and error property", async() => {
        const response = await request(app).get("/");
        expect(response.body.message).toBeTruthy();
    });

});

