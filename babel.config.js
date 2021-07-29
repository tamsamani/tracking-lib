module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-modules-umd",
      {
        exactGlobals: true,
        globals: {
          index: "TF.track",
        },
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions", "safari >= 7"],
        },
      },
    ],
  ],
};
