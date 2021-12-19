import { drop } from "ramda";
import { NavItem } from "src/types/NavItem";

const toCapitalise = (v: string): string => {
  if (v.length === 0) return "";
  const head = v[0].toUpperCase();
  const body = v.substring(1, v.length);
  return `${head}${body}`;
};

const toSpace = (v: string): string => {
  const split = v.split("-");
  const format = split.map(toCapitalise);
  return format.join(" ");
};

// Simple string append
const toAppendBaseUrl = (acc: string, v: NavItem) => `${acc}/${v.id}`;

const toAppendPath = (list: NavItem[], path: string): string => {
  // if root, or primary nav return original path
  if (list.length < 2) return `/${path}`;
  // Drop root and primary nav from the list
  const secondaryNavList = drop(1, list);
  // Generate the full path from parent routes
  const basePath = secondaryNavList.reduce<string>(toAppendBaseUrl, "");
  // Append current path
  return `${basePath}/${path}`;
};

// Generate nav items
const toNavItem = (acc: NavItem[], path: string, index: number): NavItem[] => {
  // Home path, is not defined in the URL, root path. This needs to be defined.
  if (path.length === 0) {
    return [{ id: "home", label: "Home", href: toAppendPath(acc, path) }];
  }

  // All other routes are inferred by path name
  return [
    ...acc,
    {
      id: path,
      label: toSpace(path),
      href: toAppendPath(acc, path),
    },
  ];
};

export default toNavItem;
