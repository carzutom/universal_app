require("@babel/register")({
  presets: [
    "@babel/env",
    "@babel/preset-react",
  ],
})
require("./api")
