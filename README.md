# Tina Documentation Starter

This Next.js starter is powered by TinaCMS and based upon [Smooth Doc](https://github.com/lwz7512/next-smooth-doc) it allows you and your team to create beautiful docs powered by MDX.

## Features

- Light/dark mode toggle
- Tina Headless CMS for authentication, content modeling, visual editing and team management.
- MDX component support for easy to use resuable components
- Vercel deployment to visually edit your site from the /admin route.
- Local development workflow from the filesystem with a local GraqhQL server.

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.

## Local Development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
yarn build
```

### Local URLs

- http://localhost:3000/docs/ : browse the website
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

## Getting Help

TinaCMS backend is in public beta, you might face issues, to provide feedback or get help with any challenges you may have:

- Visit the [documentation](https://tina.io/docs/) to learn about Tina.
- [Join our Discord](https://discord.gg/zumN63Ybpf) to share feedback.
- Get support through the chat widget on the TinaCMS Dashboard
- [Email us](mailto:support@tina.io) to schedule a call with our team and share more about your context and what you're trying to achieve.
- [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
- Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms).

## Development tips

### Visual Studio Code GraphQL extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion.

## LICENSE

Licensed under the [MIT License](./LICENSE).
