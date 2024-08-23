# next-full-template

## Starting the project

To get started, first clone the repository and create a `.env` file in the root of the project.
You can use the .env.example file as a starting point.

## Installation

When you're ready, you can run the following commands in the project root:

```sh
# 1. Install dependencies
pnpm install

# 2. Run the Next.js development server
pnpm dev

# 3. (Optional) (recommended) Run file watcher for graphql files in another process/terminal
pnpm gql:generate:dev
```

## Tech Stack

This project uses [React](https://reactjs.org) and [Next.js](https://nextjs.org/) as the main framework, and includes the following technologies:

### Client Side

| Category         | Technology                                                |
| ---------------- | --------------------------------------------------------- |
| Styling          | [TailwindCSS](https://tailwindcss.com)                    |
| Components       | [DaisyUI](https://daisyui.com)                            |
| State management | [Redux Toolkit](https://redux-toolkit.js.org)             |
| Data fetching    | [Apollo](https://www.apollographql.com/)                  |
| Forms\*          | [React Hook Form](https://react-hook-form.com)            |
| Icons\*          | [React Icons](https://react-icons.github.io/react-icons/) |
| Date tools\*     | [date-fns](https://date-fns.org/)                         |

### Server Side

| Category      | Technology                               |
| ------------- | ---------------------------------------- |
| Data fetching | [Apollo](https://www.apollographql.com/) |
| Auth\*        | [Auth0](https://auth0.com)               |

### Tools

| Category               | Technology                                             |
| ---------------------- | ------------------------------------------------------ |
| Language               | [TypeScript](https://www.typescriptlang.org)           |
| GraphQL Code generator | [GraphQL Codegen](https://graphql-code-generator.com/) |
| GraphQL Intellisense   | [gql.tada](https://gql-tada.0no.co/get-started/)       |
| Code Formatter         | [prettier](https://prettier.io)                        |
| Linting                | [eslint](https://eslint.org/)                          |
| Testing                | [Jest](https://jestjs.io)                              |
| E2E Testing            | [Cypress](https://cypress.io)                          |
| Env vars               | [T3 Env](https://env.t3.gg/)                           |

\* Not supported yet
