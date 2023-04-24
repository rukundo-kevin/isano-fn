import { useState } from "react";
import Tree from "react-d3-tree";
import family from "../constants/family-data";
import { CustomNodeElementProps } from "react-d3-tree/lib/types/types/common";
import dropletImg from "../images/kevin.jpg";
import { FaAngleDoubleDown, FaAngleDoubleRight } from "react-icons/fa";
import Modal from "./Modal";
import { useCenteredTree } from "../Hooks/useCenteredTree";

interface ForeignObject {
  width: number;
  height: number;
}

const renderForeignObjectNode = (
  customNodeProps: CustomNodeElementProps,
  foreignObjectProps: ForeignObject,
  handleNodeClick: any
) => {
  const { nodeDatum, toggleNode } = customNodeProps;

  return (
    <g>
      <image
        href={dropletImg}
        height="60"
        width="60"
        x="-30"
        onClick={handleNodeClick}
      />
      <foreignObject {...foreignObjectProps}>
        <div
          className={`rounded-md mt-4 border-black shadow-sm ${
            nodeDatum.__rd3t.collapsed
              ? "bg-gray-300 "
              : "bg-primary text-white"
          } `}
        >
          <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
          {nodeDatum.children && (
            <button
              className="w-full flex justify-center p-1"
              onClick={toggleNode}
            >
              {nodeDatum.__rd3t.collapsed ? (
                <FaAngleDoubleRight />
              ) : (
                <FaAngleDoubleDown />
              )}
            </button>
          )}
        </div>
      </foreignObject>
    </g>
  );
};

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
        data={family}
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
