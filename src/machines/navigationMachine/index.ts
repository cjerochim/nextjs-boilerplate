import { createMachine } from "xstate";

import context from "./context";
import * as actions from "./actions";
import * as guards from "./guards";

import { NavItem } from "src/types/NavItem";

export type NavigationEvent =
  | { type: "PONG_POSITION_UPDATE"; pos: number }
  | { type: "PONG_ACTIVE_POSITION"; path: string }
  | { type: "UPDATE"; path: string }
  | { type: "ACTIVE" }
  | { type: "INACTIVE" };

export interface NavigationContext {
  active?: boolean;
  version: string;
  path: string;
  breadcrumb: {
    list: NavItem[];
  };
  primary: {
    pongActive: boolean;
    posY: number;
    active: NavItem;
    list: NavItem[];
  };
  secondary: {
    pongActive: boolean;
    posY: number;
    root: NavItem;
    list: NavItem[];
  };
}

// Core business logic for the following, (create separate to re-use for both states)
// - Set pong element active or inactive
// - Set pong position
const pongState = {
  initial: "idle",
  states: {
    idle: {
      on: {
        PONG_ACTIVE_POSITION: { actions: ["setPongActive"] },
        PONG_POSITION_UPDATE: { actions: ["setPosition"] },
      },
    },
  },
};

const navigationMachine = createMachine<NavigationContext, NavigationEvent>(
  {
    id: "navigation",
    initial: "init",
    context,
    states: {
      init: {},
      primary: {
        entry: ["setPath", "setBreadcrumb"],
        ...pongState,
        on: {
          ACTIVE: { actions: ["setActive"] },
          INACTIVE: { actions: ["setInactive"] },
        },
      },
      secondary: {
        entry: ["setPath", "setBreadcrumb"],
        ...pongState,
        on: {
          ACTIVE: { actions: ["setActive"] },
          INACTIVE: { actions: ["setInactive"] },
        },
      },
    },
    on: {
      UPDATE: [
        {
          target: "primary",
          cond: "isPrimaryRoute",
        },
        {
          target: "secondary",
        },
      ],
    },
  },
  {
    actions,
    guards,
  }
);

export type NavigationMachine = typeof navigationMachine;

export default navigationMachine;
