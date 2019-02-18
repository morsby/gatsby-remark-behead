const behead = require("remark-behead");
const isEqual = require("lodash.isequal");

const emptyOptions = { plugins: [] };

module.exports = ({ markdownAST }, options) => {
    if (isEqual(options, emptyOptions)) options.depth = 1;

    const transformer = behead(options);

    transformer(markdownAST, options);
};
