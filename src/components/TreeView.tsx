import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
} from "react-complex-tree";
import { items } from "../constants/family-folderview";
import Profile from "./Profile";

function TreeView() {
  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({
    ...item,
    data: newName,
  }));

  return (
    <div className="flex">
      <div className="mt-28 h-[80vh] w-1/4 md:w-2/12 font-bold text-3xl border-r-2">
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
