import { FamilyTreeItem, FamilyTreeNode } from "../types";
/**
 * @description creates a family tree from flat array
 *
 */

export function createFamilyTree(
  items: FamilyTreeItem[],
  index: string
): FamilyTreeNode {
  const currentItem = items.find((item) => item.index === index);
  if (!currentItem) {
    throw new Error(`Family Member ${index} not found`);
  }

  const familyTreeNode: FamilyTreeNode = {
    name: index === "root" ? "Rulinda" : currentItem.data,
  };
  if (currentItem.attributes) {
    familyTreeNode.attributes = currentItem.attributes;
  }
  if (currentItem.isFolder || index === "root") {
    familyTreeNode.children = currentItem.children.map((childIndex) =>
      createFamilyTree(items, childIndex)
    );
  }

  return familyTreeNode;
}
