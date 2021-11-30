import { createServer } from 'miragejs';
export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
    },
    seeds(server) {
    },
    routes() {
      this.namespace = 'https://seriescharacters.com';
      this.timing = 2000

      this.get('/api/howimetyourmother', (schema, request) => {
        return [
            { name: "Ted Mosby", details: "He is the main protagonist of the series..."},
            { name: "Barney Stinson", details: "He is best friend of the protagonist..."},
            { name: "Marshall Eriksen", details: "He is also the best friend of the protagonist..."},
          ]
      })

      this.post('/api/newsletter', (schema, request) => {
        return { done: true }
      })
    },
  });
  return server;
}