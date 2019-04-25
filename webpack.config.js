const path = require("path");
const glob = require("glob");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
  	new CopyWebpackPlugin([
  		{from: "./src/app/index.html", to:"index.html"},
  		{from: "./src/app/pages/", to:"pages/", ignore:["*.js"]}
	])
  ],
  entry: {
  	app : glob.sync("./src/app/**/*.js"),
  	libs : ["./node_modules/angular/angular.min.js",
  			"./node_modules/angular-resource/angular-resource.min.js",
  			"./node_modules/angular-route/angular-route.min.js"]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};