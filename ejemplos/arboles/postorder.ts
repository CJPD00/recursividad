/**
 * Ejemplo: Recorrido Postorder (Post-orden)
 *
 * En un árbol binario, el recorrido Postorder sigue el orden:
 * 1. Izquierda
 * 2. Derecha
 * 3. Raíz
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    if (!node) return;

    // 1. Recorrer Izquierda
    traverse(node.left);
    // 2. Recorrer Derecha
    traverse(node.right);
    // 3. Procesar Raíz
    result.push(node.val);
  }

  traverse(root);
  return result;
}

// Ejemplo de uso
//      1
//     / \
//    2   3
//   / \
//  4   5

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log("Postorder:", postorderTraversal(root)); // [4, 5, 2, 3, 1]
