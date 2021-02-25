import request from 'supertest';
import { app } from '../app';
import createConnection from '../database';

describe("User", () => {

  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  test("Should be able to create a new user", async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: "teste1",
        email: "teste1@example.com"
      });

      expect(response.status).toBe(201);
  });

  test("Should not be able to create a new user with exist email", async () => {
    const response = await request(app)
    .post('/users')
    .send({
      name: "teste1",
      email: "teste1@example.com"
    });

    expect(response.status).toBe(400);
  });
});