import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
} from "react-complex-tree";
import { items } from "../constants/family-folderview";
import Profile from "./Profile";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
function TreeView() {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({
    ...item,
    data: newName,
  }));

  return (
    <div className="flex overflow-hidden ">
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`text-3xl left-1 z-50 top-[30px] md:hidden  absolute    cursor-pointer text-gray-900
 `}
      >
        {sidebarOpen ? (
          <HiXMark className="fixed" />
        ) : (
          <HiBars3CenterLeft className="fixed" />
        )}
      </div>
      <div
        className={`mt-20 pt-6 md:pt-12 h-[80vh]  md:w-2/12 font-bold text-3xl border-r-2 absolute md:relative -left-2/4 md:-left-0
        transition-transform  duration-500 ease-in ${
          sidebarOpen ? "-left-0 w-4/5 shadow-md   z-10 mt-20" : "-left-2/4"
        }`}
      >
        <UncontrolledTreeEnvironment
          dataProvider={dataProvider}
          getItemTitle={(item) => item.data}
          viewState={{}}
          canDragAndDrop={true}
          canDropOnFolder={true}
          canReorderItems={true}
        >
          <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />
        </UncontrolledTreeEnvironment>
      </div>
      <Profile />
    </div>
  );
}

export default TreeView;
