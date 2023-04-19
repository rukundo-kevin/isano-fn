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
import { log } from "console";

interface RenderItem {
  arrow?: ReactNode;
  children?: ReactNode;
  context: TreeItemRenderContext;
  depth: number;
  info: TreeInformation;
  item: TreeItem;
  title: ReactNode;
}

interface Member {
  [key: string]: {
    index: string;
    isFolder?: boolean;
    dead?: boolean;
    children?: never[];
    data: string;
  };
}

const data = items as unknown as Member;
const firstElement = data[Object.keys(data)[1]];
console.log(firstElement);

const renderItem = ({ title, arrow, depth, context, children }: RenderItem) => (
  <li
    {...context.itemContainerWithChildrenProps}
    className={`flex flex-col items-start m-0  text-medium ${
      depth > 0 ? "ml-5" : "ml-4"
    } `}
  >
    <span
      {...context.itemContainerWithoutChildrenProps}
      {...context.interactiveElementProps}
      className={`text-md relative p-1 ${
        context.isFocused && "bg-white w-full font-bold text-primary"
      }`}
    >
      <span className={`absolute top-[6px] -ml-5`}> {arrow} </span>
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
    <div className="flex overflow-hidden h-[100vh] ">
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={` left-1 z-50 top-[30px] md:hidden text-3xl absolute cursor-pointer  text-gray-600
 `}
      >
        {sidebarOpen ? (
          <HiXMark className="fixed" />
        ) : (
          <HiBars3CenterLeft className="fixed" />
        )}
      </div>
      <div
        className={`mt-24 h-full md:w-1/5 font-normal  border-r-2 absolute md:relative -left-2/4 md:-left-0
        transition-transform  duration-500 ease-in bg-[#f6f8fa] ${
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
          onSelectItems={handleSelect}
          renderItem={renderItem}
        >
          <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />
        </UncontrolledTreeEnvironment>
      </div>
      <Profile {...firstElement} />
    </div>
  );
}

export default TreeView;
