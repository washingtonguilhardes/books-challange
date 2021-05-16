# Books Chalange

This project is a proposed challenge that use the Google book api and allow the user to see the details of each book clicked and load more books.

In order to achieve the proposed objectives, both as functionality and quality of code, we use:

## Main dependences

- React: a JavaScript library for building user interfaces.
- React Router DOM: a JavaScript lib that allows to create "Declarative Routes" in the client-side
- Material Ui: React components lib
- Axios: Pormise base HTTP client for a browser and node.js
- Google Books API: The Books API is a way to search and access that content, as well as to create and view personalization around that content.

## Development dependences

- Eslint and theirs plugins: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.
- Prettier: An opinionated code formatter

> To see more about dependences and devDependences, please check-out `project.json`

## Project Management

[Trello board](https://trello.com/b/BIMduYoR/olinga-books-challenge)

Tasks:

- [Home] Search field: By title or author
- [Home] The result list should have a title and thumbnail
- [Home] It should have the option to load more items.
- [Home] When clicking on an item, it goes to the Details page.
- [Book Details] Show book’s info such as Title, Subtitle, Author, Year, Total pages, Description and Categories
- [Book Details] Option to add to favorite list (Use global state)
- [Book Details] Back button
- [API] Setup axios
- [DS] Setup styled-components & material-ui
- [ENV] Setup api-key

## About setup and run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
