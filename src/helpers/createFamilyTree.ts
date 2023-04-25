import { FamilyTreeItem, FamilyTreeNode } from "../types";

export function createFamilyTree(
  items: FamilyTreeItem[],
  index: string
): FamilyTreeNode {
  const currentItem = items.find((item) => item.index === index);
  if (!currentItem) {
    throw new Error(`Item ${index} not found`);
  }

  const familyTreeNode: FamilyTreeNode = {
    name: currentItem.data,
  };

  if (currentItem.isFolder || index == "root") {
    familyTreeNode.children = currentItem.children.map((childIndex) =>
      createFamilyTree(items, childIndex)
    );
  }

  if (currentItem.attributes) {
    familyTreeNode.attributes = currentItem.attributes;
  }

  return familyTreeNode;
}
