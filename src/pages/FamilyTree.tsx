import { useState } from "react";
import Tree from "react-d3-tree";
import Modal from "../components/Modal";
import { useCenteredTree } from "../Hooks/useCenteredTree";
import { FamilyTreeItem, FamilyTreeNode } from "../types";
import { items } from "../constants/family-folderview";
import { createFamilyTree } from "../helpers/createFamilyTree";
import renderForeignObjectNode from "../components/ForeignObjectNode";

const itemsArray: FamilyTreeItem[] = Object.values(items).map((item) => ({
  data: item.data,
  children: item.children,
  index: item.index,
  isFolder: item.isFolder,
  attributes: {
    gender: item.gender,
    born: item.born,
    dead: item.dead,
    photo: item.photo,
  },
}));

const familyTree: FamilyTreeNode = createFamilyTree(itemsArray, "root");

const FamilyMemberModal = ({
  photo,
  showModal,
  setShowModal,
}: {
  photo?: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) => {
  return (
    <Modal visible={showModal} onClose={() => setShowModal(false)}>
      <div className="flex justify-center items-center bg-gray-200 w-3/5 h-3/4 mt-28">
        <img
          id="modalImage"
          src={photo}
          alt="Family Member"
          className="w-70 h-60"
        ></img>
      </div>
    </Modal>
  );
};

export default function FamilyTree() {
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState("");

  const [dimensions, translate, containerRef] = useCenteredTree();

  const nodeSize = { x: 140, y: 150 };

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  const handleNodeClick = (photo: string) => {
    setPhoto(photo);
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
        separation={{ siblings: 1.3, nonSiblings: 2 }}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode(
            rd3tProps,
            foreignObjectProps,
            handleNodeClick
          )
        }
      />
      <FamilyMemberModal
        photo={photo}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
