const supertest = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {

  beforeEach(async() => {
    //executando as migrations
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });

  it('should able to create a new ONG', async () => {
    const request = await supertest(app).post('/ongs').send(
      {
        name: "Nome",
        email: "email@mail.com",
        whatsapp: "11960225297",
        city: "São Paulo",
        uf: "SP"
      }
    );

    expect(request.body).toHaveProperty('id');
    expect(request.body.id).toHaveLength(8);
  });
});