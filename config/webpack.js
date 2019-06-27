let path = require("path");

const DIST = path.resolve(__dirname, "../");


module.exports = {
    mode: "development",
    resolve: {
        modules: [path.resolve(__dirname, "../"), "node_modules"]
    },
    entry: {
        index: "./js/apobanner.js"
    },
    output: {
        filename: "[name].js",
        path: DIST,
        library: 'adblock_detection_banner_demo',
        libraryTarget: 'umd',
        libraryExport: 'default'
    }
};
