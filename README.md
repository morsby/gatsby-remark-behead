# gatsby-remark-behead

A plugin for [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/), wrapping [remark-behead](https://github.com/mrzmmr/remark-behead).

Used to alter markdown header levels when parsed through remark.

Currently only the `depth` option works consistently.

## Usage 

Just add it to list of `gatsby-transformer-remark` plugins:

```
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-behead`],
    },
  },
]
```

## Options

- `depth`: Number. Default `1`. Changes the heading level by the provided number.

## Examples

Decrease all headers by one level (e.g. `<h1>` to `<h2>`):

```
{
    resolve: "gatsby-remark-behead",
    options: { depth: 1 },
}
```

Increase all headers by one level (e.g. `<h2>` to `<h1>`):

```
{
    resolve: "gatsby-remark-behead",
    options: { depth: -1 },
}
```
