import { useState } from "react";
import Tree from "react-d3-tree";
import dropletImg from "../images/kevin.jpg";
import Modal from "../components/Modal";
import { useCenteredTree } from "../Hooks/useCenteredTree";
import { FamilyTreeItem, FamilyTreeNode } from "../types";
import { items } from "../constants/family-folderview";
import { createFamilyTree } from "../helpers/createFamilyTree";
import renderForeignObjectNode from "../components/ForeignObjectNode";

const itemsArray: FamilyTreeItem[] = Object.values(items);

const familyTree: FamilyTreeNode = createFamilyTree(itemsArray, "root");

export default function FamilyTree() {
  const [showModal, setShowModal] = useState(false);
  const [dimensions, translate, containerRef] = useCenteredTree();

  const nodeSize = { x: 120, y: 100 };

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
  const handleNodeClick = () => {
    setShowModal(true);
  };

  return (
    <div id="treeWrapper" className="h-screen w-screen" ref={containerRef}>
      <Tree
        data={familyTree}
        pathFunc="step"
        orientation="vertical"
        translate={translate}
        dimensions={dimensions}
        centeringTransitionDuration={1000}
        zoom={0.7}
        nodeSize={nodeSize}
        initialDepth={1}
        separation={{ siblings: 1.4, nonSiblings: 2 }}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode(
            rd3tProps,
            foreignObjectProps,
            handleNodeClick
          )
        }
      />

      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="flex justify-center items-center bg-gray-200 w-3/5 h-3/4 mt-28">
          <img src={dropletImg} className="w-70 h-60"></img>
        </div>
      </Modal>
    </div>
  );
}
