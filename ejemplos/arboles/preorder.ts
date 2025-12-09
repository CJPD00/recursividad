/**
 * Ejemplo: Recorrido Preorder (Pre-orden)
 *
 * En un árbol binario, el recorrido Preorder sigue el orden:
 * 1. Raíz
 * 2. Izquierda
 * 3. Derecha
 */

// Definición simple de Nodo para el ejemplo
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

export function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    // Caso Base: nodo nulo
    if (!node) return;

    // 1. Procesar Raíz
    result.push(node.val);
    // 2. Recorrer Izquierda
    traverse(node.left);
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

console.log("Preorder:", preorderTraversal(root)); // [1, 2, 4, 5, 3]
