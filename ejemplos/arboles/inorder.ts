/**
 * Ejemplo: Recorrido Inorder (En-orden)
 *
 * En un árbol binario, el recorrido Inorder sigue el orden:
 * 1. Izquierda
 * 2. Raíz
 * 3. Derecha
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

export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    if (!node) return;

    // 1. Recorrer Izquierda
    traverse(node.left);
    // 2. Procesar Raíz
    result.push(node.val);
    // 3. Recorrer Derecha
    traverse(node.right);
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

console.log("Inorder:", inorderTraversal(root)); // [4, 2, 5, 1, 3]
