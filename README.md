# frontend monorepo

This is Turborepo starter with shadcn/ui pre-configured.

> [!NOTE]
> This example uses `pnpm` as package manager.


## Using this example

Clone the repository:

```sh
git clone https://github.com/rezar12/frontend_boilerplate.git
```

Install dependencies:

```sh
cd frontend_boilerplate
pnpm install
```

### Add ui components

Use the pre-made script:

```sh
pnpm ui add <component-name>
```

> This works just like the `shadcn/ui` CLI.

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
pnpm turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `pnpm install` after copying an app.


### Develop

To develop all apps and packages, run the following command:

```sh
cd frontend_boilerplate
pnpm dev
```



