import { useState } from "react";
import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
  TreeItemIndex,
} from "react-complex-tree";
import { items } from "../constants/family-folderview";
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RenderItem } from "../types";
import Profile from "./Profile";

const renderItem = ({
  title,
  arrow,
  depth,
  context,
  children,
  item,
}: RenderItem) => (
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
      <Link to={`/family/${item.index}`} className="mr-4">
        {title}
      </Link>
    </span>
    {children}
  </li>
);

function FamilySidebar() {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({
    ...item,
    data: newName,
  }));

  const handleSelect = (memberIndex: TreeItemIndex[]) => {};

  return (
    <div className="flex overflow-hidden  ">
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
        className={`mt-24 min-h-full md:w-1/5 font-normal  border-r-2 absolute md:relative -left-2/4 md:-left-0
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
      {pathname === "/family" ? <Profile /> : <Outlet />}
    </div>
  );
}

export default FamilySidebar;
