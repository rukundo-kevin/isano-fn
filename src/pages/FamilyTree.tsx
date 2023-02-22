import { useState } from "react";
import Tree from "react-d3-tree";
import Modal from "../components/Modal";
import { useCenteredTree } from "../Hooks/useCenteredTree";
import { Attributes, FamilyTreeItem, FamilyTreeNode } from "../types";
import { items } from "../constants/family-folderview";
import { createFamilyTree } from "../helpers/createFamilyTree";
import renderForeignObjectNode from "../components/ForeignObjectNode";
import { FaUser } from "react-icons/fa";
import { TreeNodeDatum } from "react-d3-tree/lib/types/types/common";

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

interface ModalTreeNode {
  member: TreeNodeDatum;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const familyTree: FamilyTreeNode = createFamilyTree(itemsArray, "root");

const FamilyMemberModal = (memberData: ModalTreeNode) => {
  const memberAttributes = memberData.member.attributes as Attributes;
  const { photo, gender, born, dead } = memberAttributes;
  const { showModal, setShowModal } = memberData;

  if (photo) {
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
  } else {
    return (
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="flex justify-center items-center bg-gray-200 w-3/5 h-3/4 mt-28">
          <FaUser className="w-1/2 h-1/3" />
        </div>
      </Modal>
    );
  }
};

export default function FamilyTree() {
  const [showModal, setShowModal] = useState(false);

  const [memberData, setMemberData] = useState<TreeNodeDatum>({
    name: "",
    attributes: {},
    children: [],
    __rd3t: {
      depth: 0,
      id: "root",
      collapsed: false,
    },
  });

  const [dimensions, translate, containerRef] = useCenteredTree();

  const nodeSize = { x: 140, y: 150 };

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
  const handleNodeClick = (memberData: TreeNodeDatum) => {
    setMemberData(memberData);
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
        member={memberData}
        showModal
        setShowModal={setShowModal}
      />
    </div>
  );
}
