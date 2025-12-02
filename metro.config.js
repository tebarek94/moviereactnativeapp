const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// The project's global Tailwind CSS file is at the repo root `globals.css`.
// Point NativeWind's metro helper to that file so it can process CSS imports.
module.exports = withNativeWind(config, { input: "./app/globals.css" });
