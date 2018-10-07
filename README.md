# next-typescript-graphql

A simple [next.js](https://nextjs.org) template with support for TypeScript files, and [Apollo GraphQL](https://www.apollographql.com/).

This template was created for usage with [byteconf.com](https://byteconf.com) - it will get some updates as part of that process, but please feel free to contribute, too! In particular, I'm pretty new to the next.js ecosystem, so I'm very eager to receive recommendations on how best to format this project.

## Usage

Running the application: `yarn run dev`

Building the application: `yarn run build`

## Getting started

This template is designed to be workable with the next.js documentation - in particular, check out the [setup guide](https://nextjs.org/docs/#setup)! Just make sure to use `.tsx` instead of `.js` :sunglasses:

There are two routes in this example:
- `/`: a static page, rendered from `pages/index.tsx`
- `/withRequest`: rendered from `pages/withRequest.tsx`, this page makes a query to the [graphql-pokemon](https://graphql-pokemon.now.sh) service and renders the response in the component.

This template specifically doesn't include a lot of things, like styling, complex routing logic, etc. Everyone approaches that a bit differently, and you're welcome to fork this repo for whatever new base template _you_ like, or, if you think it's a worthwhile addition, open a PR!

## Questions?

Reach out to me on [Twitter](https://twitter.com/signalnerve)!
