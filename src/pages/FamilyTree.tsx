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

  return (
    <Modal visible={showModal} onClose={() => setShowModal(false)}>
      <div className="flex w-full md:w-[60%] items-center justify-center m-4">
        <div className="w-full rounded-xl p-12 shadow-2xl md:w-8/12 lg:w-10/12 bg-white">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="grid-cols-1 lg:col-span-2">
              <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-blue-100 p-2">
                {photo ? (
                  <img
                    id="modalImage"
                    src={photo}
                    alt="Family Member"
                    className="rounded-full object-cover w-full h-full"
                  ></img>
                ) : gender !== "Female" ? (
                  <FaUser className="w-1/2 h-1/3" />
                ) : (
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    className="w-1/2 h-1/3"
                  >
                    <path
                      fill="#141f38"
                      className="cls-1"
                      d="M97.19,344.56a74.43,74.43,0,0,1-3.45-26.46L102.4,153.6a153.6,153.6,0,0,1,307.2,0l8.66,164.49a74.43,74.43,0,0,1-3.45,26.46,184.59,184.59,0,0,0-82-44.66V277.8A114.61,114.61,0,0,0,371.2,192V160a44.85,44.85,0,0,0-44.8-44.8H185.6A44.85,44.85,0,0,0,140.8,160v29.11a119,119,0,0,0,38.4,87.79v23A184.59,184.59,0,0,0,97.19,344.56Zm103-83.31,4.61,3.84v45.18l51.2,32.9,51.2-32.9V265.73l4.8-3.84A89.2,89.2,0,0,0,345.6,192V160a19.26,19.26,0,0,0-19.2-19.2H185.6A19.26,19.26,0,0,0,166.4,160v29.12A93.45,93.45,0,0,0,200.19,261.25Zm130.24,64.51L256,373.63l-74.43-47.87C112.7,344.58,64,420.29,64,492.8A19.26,19.26,0,0,0,83.2,512H428.8A19.26,19.26,0,0,0,448,492.8C448,420.29,399.3,344.58,330.43,325.76Z"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="col-span-1 lg:col-start-5 lg:col-span-full">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-zinc-700">
                  {memberData.member.name}
                </h2>
                <p className="flex mt-6 ml-4 text-zinc-500">
                  <h4 className="text-lg font-bold text-zinc-700">Gender</h4>
                  <span className="ml-2 mt-[2px]">{gender}</span>
                </p>
                <p className="flex mt-6 ml-4 text-zinc-500">
                  <h4 className="text-lg font-bold text-zinc-700">Born</h4>
                  <span className="ml-2 mt-[2px]">
                    {born} - {dead}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
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
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
