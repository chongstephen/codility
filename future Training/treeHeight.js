function treeHeight(node){
  if(node === null) {
    return -1;
  }

  let leftNode = treeHeight(node.left);
  let rightNode = treeHeight(node.right);

  return Math.max(leftNode, rightNode) + 1;
}