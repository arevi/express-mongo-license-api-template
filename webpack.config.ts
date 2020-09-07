import webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";
import NodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  entry: "./src/app.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".json"],
  },
  externals: NodeExternals(),
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },
  plugins: [new NodemonPlugin()],
};

export default config;
