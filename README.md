# Tailwind-rn with Nx

## Steps to use

- Install the dependencies.
- Run `nx run mobile:tailwind` to generate the styles.
- Run `nx run mobile:serve` to start the metro server.
- Run `nx run mobile:run-android` to start the Android app or `nx run mobile:run-ios` to start the iOS app.
- You should be able to see a light blue screen with some text on the center.

## Steps to recreate

- Create a new Nx workspace.
- Add `@nrwl/react-native` to your workspace dependencies.
- Create a new React Native project.
- Add `tailwindcss postcss concurrently tailwind-rn` to your workspace dependencies.
- Go to your app directory and run `echo @tailwind utilities; > input.css`.
- Create a command in the `project.json` of your app:

```json
"tailwind": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "cwd": "apps/mobile",
    "command": "concurrently \"tailwindcss --input input.css --output tailwind.css --no-autoprefixer --watch\" \"tailwind-rn --watch\""
  }
}
```

- Create your `tailwind.config.js` file in your project.
- Create a dummy `tailwind.config.js` file in the workspace root directory so that the tailwind VSCode extension can start.
- Add a setting to get intellisense inside your components:

```json
{
  "tailwindCSS.experimental.classRegex": ["tailwind\\(([^)]*)\\)", "'([^']*)'"]
}
```

- Follow the steps above to start the app.
