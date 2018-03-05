import assert from 'assert';
import * as babel from 'babel-core';
import plugin from '../src';

const testGeneration = (message, code, expectedCode) => {
  const transformedCode = babel.transform(code, {
    babelrc: false,
    plugins: [[plugin]],
  }).code;
  assert.equal(transformedCode.trim(), expectedCode.trim(), message);
};

testGeneration(
  'add undefined as a function',
  `
let isThisAGoodIdea = 'yes';
`,
  `
function undefined() {
  return undefined;
}

let isThisAGoodIdea = 'yes';
`
);
