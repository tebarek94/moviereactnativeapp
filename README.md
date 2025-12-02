# MoveApp

An Expo app using Expo Router, NativeWind (Tailwind for React Native), and TypeScript.

This repository contains a starter Expo project with file-based routing under the `app/` directory and a preserved example in `app-example/`.

**Tech stack:** `expo`, `expo-router`, `react-native`, `nativewind`, `tailwindcss`, `typescript`

## Quick start

1. Install dependencies

```powershell
npm install
```

2. Start Expo (Metro)

```powershell
npx expo start
```

3. (Optional) Start with cleared cache when changing configs

```powershell
npx expo start -c
```

## Run on devices / simulators

- Android:

```powershell
npm run android
```

- iOS (macOS only):

```bash
npm run ios
```

- Web:

```powershell
npm run web
```

## Important files

- `app/` — Application source (Expo Router file-based routes)
- `app-example/` — Starter example preserved by `reset-project`
- `babel.config.js` — Babel configuration (includes NativeWind plugin and node_modules overrides)
- `metro.config.js` — Metro configuration (integrated with NativeWind via `nativewind/metro`)
- `tailwind.config.js` — TailwindCSS configuration used by NativeWind
- `globals.css` — Global Tailwind CSS file imported by NativeWind (referenced in `metro.config.js`)

## Troubleshooting

- Metro cannot load `metro.config.js`

  - Symptom: `Error: Found config at .../metro.config.js that could not be loaded with Node.js.`
  - Cause: `metro.config.js` contains ESM syntax (e.g. `import` / `export`) or other non-CommonJS constructs.
  - Fix: Ensure `metro.config.js` uses CommonJS and `module.exports`. Example used in this project:

  ```javascript
  const { getDefaultConfig } = require('expo/metro-config');
  const { withNativeWind } = require('nativewind/metro');

  const config = getDefaultConfig(__dirname);

  module.exports = withNativeWind(config, { input: './app/globals.css' });
  ```

- Syntax errors referring to `interface` inside `node_modules` (TypeScript source)

  - Symptom: Error like `Unexpected reserved word 'interface'` pointing to a `.ts` file in `node_modules` (e.g. `@expo/metro-runtime`).
  - Cause: Some packages ship TypeScript sources. Metro ignores `node_modules` by default so Babel doesn't transpile those files.
  - Fix: Add a Babel `overrides` entry in `babel.config.js` to force transpilation of the offending package(s). This project already includes an override for `@expo/metro-runtime`.

  After changing `babel.config.js` or `metro.config.js`, restart Expo with the cleared cache:

```powershell
npx expo start -c
```

## Developer notes

- NativeWind setup: `babel.config.js` includes the `nativewind/babel` plugin. `tailwind.config.js` should include content paths covering the `app/` directory.
- If you customized `metro.config.js` using `npx expo customize metro.config.js`, make sure it remains CommonJS.
- When adding packages that ship TypeScript sources, watch for Metro/Babel issues and add overrides as needed.

## Scripts

- `npm start` / `npx expo start` — Start Metro
- `npm run android` — Run on Android
- `npm run ios` — Run on iOS (macOS)
- `npm run web` — Run on web
- `npm run reset-project` — Move starter files to `app-example/` and create a blank `app/`

## Contributing

Add issues or pull requests to the repository. Keep changes focused and document any breaking behavior.

## License

No license file is included. Add a license (for example `MIT`) if you plan to open-source this project.

---

If you'd like, I can also:

- Run `npx expo start -c` and capture Metro logs for errors you're seeing now.
- Update `metro.config.js` or `babel.config.js` to fix any remaining build errors.
- Expand this README with screenshots, route docs, or run instructions for CI.

Tell me which you'd like next.
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a


You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:


## Join the community

Join our community of developers creating universal apps.

