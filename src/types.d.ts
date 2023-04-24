import { ReactNode } from "react";
import family from "../constants/family-data";

import {
  TreeItemRenderContext,
  TreeItem,
  TreeInformation,
} from "react-complex-tree";

interface RenderItem {
  arrow?: ReactNode;
  children?: ReactNode;
  context: TreeItemRenderContext;
  depth: number;
  info: TreeInformation;
  item: TreeItem;
  title: ReactNode;
}

interface FamilyMember {
  index: string;
  isFolder?: boolean;
  dead?: boolean;
  children?: never[];
  data: string;
  born: string;
  photo?: string;
  gender: string;
}
