import { dropRepeats } from "ramda";
import isMatchPath from "src/utils/isMatchPath";
import { assign } from "xstate";
import { NavigationContext, NavigationEvent } from "..";
import toNavItem from "../utils/toNavItem";

export const log = (context: NavigationContext, event: NavigationEvent) =>
  console.log(context, event);

export const setActive = assign<NavigationContext, NavigationEvent>({
  active: (ctx, evt) => {
    if (evt.type !== "ACTIVE") return ctx.active;
    return true;
  },
});

export const setInactive = assign<NavigationContext, NavigationEvent>({
  active: (ctx, evt) => {
    if (evt.type !== "INACTIVE") return ctx.active;
    return false;
  },
});

export const setPosition = assign<NavigationContext, NavigationEvent>(
  (ctx, evt, actor) => {
    if (evt.type !== "PONG_POSITION_UPDATE") return ctx;

    // Determine if primary or secondary to associate active correctly
    const isPrimary = actor.state?.matches("primary");
    if (isPrimary) {
      return {
        ...ctx,
        primary: {
          ...ctx.primary,
          posY: evt.pos,
        },
      };
    }
    return {
      ...ctx,
      secondary: {
        ...ctx.secondary,
        posY: evt.pos,
      },
    };
  }
);

export const setPongActive = assign<NavigationContext, NavigationEvent>(
  (ctx, evt, actor) => {
    if (evt.type !== "PONG_ACTIVE_POSITION") return ctx;

    // Determine if primary or secondary to associate active correctly
    const isPrimary = actor.state?.matches("primary");
    const list = isPrimary ? ctx.primary.list : ctx.secondary.list;
    const activeItem = list.find((v) => isMatchPath(evt.path, v.href));
    const pongActive = typeof activeItem !== "undefined";
    if (isPrimary) {
      return {
        ...ctx,
        primary: {
          ...ctx.primary,
          pongActive,
        },
      };
    }
    return {
      ...ctx,
      secondary: {
        ...ctx.secondary,
        pongActive,
      },
    };
  }
);

export const setPath = assign<NavigationContext, NavigationEvent>({
  path: (ctx, evt) => {
    if (evt.type != "UPDATE") return ctx.path;
    return evt.path;
  },
});

export const setBreadcrumb = assign<NavigationContext, NavigationEvent>({
  breadcrumb: (ctx, evt) => {
    // Breakdown paths
    const splitPath = ctx.path.split("/");
    // Remove all duplicates, generally this will be empty strings
    const cleanList = dropRepeats(splitPath);
    // Gnerate nav items based on router path
    const list = cleanList.reduce(toNavItem, []);
    return {
      ...ctx.breadcrumb,
      list,
    };
  },
});
