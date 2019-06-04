module.exports = function(api) {
  console.log("-- root babel.config.js");
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };
};
