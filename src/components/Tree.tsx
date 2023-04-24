import React from "react";
import Tree from "react-d3-tree";
import family from "../constants/family-data";
import { CustomNodeElementProps } from "react-d3-tree/lib/types/types/common";
import dropletImg from "../images/kevin.jpg";
import { FaAngleDoubleDown, FaAngleDoubleRight } from "react-icons/fa";

interface ForeignObject {
  width: number;
  height: number;
}

const renderForeignObjectNode = (
  customNodeProps: CustomNodeElementProps,
  foreignObjectProps: ForeignObject
) => {
  const { nodeDatum, toggleNode } = customNodeProps;
  return (
    <g>
      <image href={dropletImg} height="60" width="60" x="-30" />
      <foreignObject {...foreignObjectProps}>
        <div className="rounded-md mt-4 border-black shadow-sm bg-gray-300">
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
  const nodeSize = { x: 120, y: 100 };

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return (
    <div id="treeWrapper" className="h-screen w-screen">
      <Tree
        data={family}
        pathFunc="step"
        orientation="vertical"
        translate={{ x: window.innerWidth / 2, y: 120 }}
        zoom={8}
        initialDepth={1}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode(rd3tProps, foreignObjectProps)
        }
      />
    </div>
  );
}
