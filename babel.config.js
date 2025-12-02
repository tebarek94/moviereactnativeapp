module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // Ensure certain packages shipped with TypeScript source in node_modules
    // are transpiled by Babel (Metro normally ignores node_modules).
    overrides: [
      {
        test: /node_modules[\\/]@expo[\\/]metro-runtime/,
        presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
      },
    ],
  };
};
