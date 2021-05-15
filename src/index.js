import express from 'express';
import OpenAPIBackend from 'openapi-backend';
import register from './routes'

const app = express();

// create api with your definition file or object
const api = new OpenAPIBackend({ definition: './reference/Recipes.yaml' });


// register your framework specific request handlers here\
api.register({
  notFound: (c, req, res) => res.status(404).json({ err: 'not found' }),
});
register(api)


app.use(express.json());
app.use((req, res) => api.handleRequest(req, req, res));
app.listen(9000);
