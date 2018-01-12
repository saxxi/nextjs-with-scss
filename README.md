# Wordpress FE

Highly optimised framework for frontend Wordpress websites.

Main components:
- bulma
- wordpress JSON api
- react

# Development

```
PORT=8080 yarn dev
```

# Production

```
yarn build && PORT=8080 yarn start
```

# TODO

- routes for pages

/[page-slug]

- blog routes

GET INDEX, "/[category]"
GET SHOW, "/[category]/[post-slug]"

- basic layout
- optimise for different devices
- optimise for first byte
- optimise for SEO meta
