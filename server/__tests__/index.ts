import request from "supertest";
import app from "../src/app";

describe("app", () => {
    it("GET /api/test", done => {
        request(app).get("/api/test").expect(200, { message: "hello" }, done);
    });

    it("POST /api/new_user", done => {
        request(app).post("/api/new_user").send({ name: "Salman", age: 19 }).expect(200, { name: "Salman", age: 19 }, done);
    });
});
