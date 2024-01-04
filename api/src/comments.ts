import * as ts from 'typescript';

function extractCommentsFromProps(fileName: string) {
  // 创建一个程序来处理 TypeScript 文件
  const program = ts.createProgram([fileName], {});
  const checker = program.getTypeChecker();

  // 获取源文件的语法树
  const sourceFile = program.getSourceFile(fileName);
  if (!sourceFile) {
    throw new Error(`Cannot find file: ${fileName}`);
  }

  // 遍历语法树的每一个节点
  ts.forEachChild(sourceFile, visit);

  function visit(node: ts.Node) {
    // 如果节点是一个 Vue 3 props 的定义
    if (ts.isPropertyAssignment(node) && node.name.getText() === 'props') {
      // 获取属性的类型注解
      const type = checker.getTypeAtLocation(node.initializer);
      const props = type.getProperties();

      // 遍历每一个属性
      for (const prop of props) {
        // 获取属性的注释
        const comments = ts.getJSDocCommentsAndTags(prop.valueDeclaration!);

        for (const comment of comments) {
          console.log(comment.getText());
        }
      }
    }

    // 继续遍历子节点
    ts.forEachChild(node, visit);
  }
}
