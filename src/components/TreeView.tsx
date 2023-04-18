import { useState, ReactNode } from "react";
import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
  TreeItemRenderContext,
  TreeItem,
  TreeInformation,
} from "react-complex-tree";
import { items } from "../constants/family-folderview";
import Profile from "./Profile";
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface renderItemI {
  arrow?: ReactNode;
  children?: ReactNode;
  context: TreeItemRenderContext;
  depth: number;
  info: TreeInformation;
  item: TreeItem;
  title: ReactNode;
}

const handleRenderItem = ({
  title,
  arrow,
  depth,
  context,
  children,
}: renderItemI) => (
  <li
    {...context.itemContainerWithChildrenProps}
    className={`flex flex-col items-start m-0 ${depth > 0 ? "ml-5" : "ml-4"} `}
  >
    <span
      {...context.itemContainerWithoutChildrenProps}
      {...context.interactiveElementProps}
      className={`text-md relative p-1 ${
        context.isFocused &&
        "bg-white w-full border-l-2 border-l-red-300 rounded-sm"
      }`}
    >
      <span className="absolute top-[3px] -ml-4"> {arrow} </span>
      <Link to="#" className="mr-4">
        {title}
      </Link>
    </span>
    {children}
  </li>
);

function TreeView() {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({
    ...item,
    data: newName,
  }));

  const handleSelect = (items: any) => {
    console.log(items);
  };

  return (
    <div className="flex overflow-hidden ">
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={` left-1 z-50 top-[30px] md:hidden absolute cursor-pointer text-gray-900
 `}
      >
        {sidebarOpen ? (
          <HiXMark className="fixed" />
        ) : (
          <HiBars3CenterLeft className="fixed" />
        )}
      </div>
      <div
        className={`mt-24 h-[80vh]  md:w-2/12 font-bold  border-r-2 absolute md:relative -left-2/4 md:-left-0
        transition-transform  duration-500 ease-in ${
          sidebarOpen
            ? "-left-0 w-4/5 shadow-md  bg-gray-200 z-10 mt-20"
            : "-left-2/4"
        }`}
      >
        <UncontrolledTreeEnvironment
          dataProvider={dataProvider}
          getItemTitle={(item) => item.data}
          viewState={{}}
          canDragAndDrop={true}
          canDropOnFolder={true}
          canReorderItems={true}
          onSelectItems={handleSelect}
          renderItem={handleRenderItem}
        >
          <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />
        </UncontrolledTreeEnvironment>
      </div>
      <Profile />
    </div>
  );
}

export default TreeView;
