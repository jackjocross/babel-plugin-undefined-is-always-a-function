export default function({ types: t }) {
  return {
    visitor: {
      Program(path) {
        path.unshiftContainer(
          'body',
          t.functionDeclaration(
            t.identifier('undefined'),
            [],
            t.blockStatement([t.returnStatement(t.identifier('undefined'))])
          )
        );
      },
    },
  };
}
