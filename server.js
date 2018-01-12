const express = require('express');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

app.prepare().then(() => {

  const server = express();
  const handle = app.getRequestHandler();

  // CUSTOM ROUTES GO HERE
  server.get('/blog/:id', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/blog', mergedQuery);
  });

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS 
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 8080;
  
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
