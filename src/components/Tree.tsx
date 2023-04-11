import React from "react";
import Tree from "react-d3-tree";
import family from "../constants/family-data";

export default function FamilyTree() {
  return (
    <div id="treeWrapper" className="h-screen w-screen">
      <Tree
        data={family}
        pathFunc="step"
        orientation="vertical"
        translate={{ x: window.innerWidth / 2, y: 120 }}
        zoom={8}
      />
    </div>
  );
}
