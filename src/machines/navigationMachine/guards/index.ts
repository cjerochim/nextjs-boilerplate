import { NavigationContext, NavigationEvent } from "..";

// TODO - Move into config
const primaryList = [
  "/projects/create-project",
  "/projects/create-project/team",
  "/projects/create-project/logistics",
  "/projects/create-project/complete",
  "/projects",
  "/calendar",
  "/directory",
  "/messages",
  "/",
];

const isPrimary = (path: string) => primaryList.some((v) => v === path);

export const isPrimaryRoute = (
  ctx: NavigationContext,
  evt: NavigationEvent
) => {
  if (evt.type != "UPDATE") throw Error("Should only be used on UPDATE event");
  return isPrimary(evt.path);
};
