# search-and-stay-project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Explanation

This repository contains the project for a technical test that consists of connecting to an API with Bearer authentication and accessing 5 internal endpoints to list registered items, list 1 specific item, create, update, and delete an item.

The project consists of 2 pages: the first is a simple login page, and the second is an initial page with the registration form and a list of registered items.

## Considerations

In this project, I chose to solve the problem in a simple way. Therefore, I solved everything that had been requested in the task within the Vue options API, without the need to create a Vuex store to perform the task.

The choice not to use Vuex is a personal one. I like the "keep it simple" idea, that is, I like to solve problems in the simplest way possible.

The project is responsive and can be used on smartphones and tablets.

