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
  dead?: string;
  children: string[];
  data: string;
  born?: string;
  photo?: string;
  gender?: string;
}

interface FamilyTreeNode {
  name: string;
  children?: FamilyTreeNode[];
  attributes?: Record<string, any>;
}

interface Attributes {
  gender?: string;
  photo?: string;
  born?: string;
  dead?: string;
}

interface FamilyTreeItem extends FamilyMember {
  attributes?: Attributes;
}
