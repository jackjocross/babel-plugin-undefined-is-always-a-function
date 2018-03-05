# babel-plugin-undefined-is-always-a-function

In case [undefined-is-a-function](https://github.com/donavon/undefined-is-a-function) is not thorough enough for your use case, this Babel plugin will ensure that undefined is a function in each module that you transform.

## Example

```js
function isUndefinedAFunction() {
  return typeof undefined === 'function';
}
```

Now it is:

```js
function undefined() {
  return undefined;
}

function isUndefinedAFunction() {
  return typeof undefined === 'function';
}
```

## Installation

```sh
$ npm install babel-plugin-undefined-is-always-a-function
```

## Usage

### `.babelrc`

```json
{
  "plugins": ["undefined-is-always-a-function"]
}
```

### `webpack.config.js`

```js
loaders: [
  {
    test: /\.jsx?$/,
    loader: 'babel',
    plugins: []
    options: {
      plugins: [
        require('babel-plugin-undefined-is-always-a-function'),
      ]
    }
  }
]
```
