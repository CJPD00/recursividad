type FileSystemNode = {
  name: string;
  type: "file" | "folder";
  children?: FileSystemNode[];
};

export function countFiles(node: FileSystemNode): number {
  if (node.type === "file") return 1;

  if (!node.children) return 0;

  let total = 0;
  for (const child of node.children) {
    total += countFiles(child);
  }
  return total;
}
