const jsonServer = require('json-server');
const times = require('lodash/times');
const faker = require('faker');

const generateData = () => {
  const identity = {
    isAuthenticated: false,
    //name: faker.name.firstName()
  };
  const contacts = times(14, (i) => ({
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    status: faker.lorem.sentence(),
    image: faker.image.avatar()
  }));

  return { identity, contacts };
};

const db = generateData();

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = 8008;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
});