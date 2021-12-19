import { createMachine } from "xstate";
import context from "./context";

import * as actions from "./actions";
import * as guards from "./guards";
import { LoaderRef } from "./actors/loaderActor";

export type UploaderEvent =
  | { type: "UPLOAD_FILE"; file: File }
  | { type: "UPLOAD_FILE_COMPLETE"; id: string | null }
  | { type: "UPLOAD_FILE_REMOVE"; id: string | null }
  | { type: "UPLOAD_FILE_ERROR"; id: string | null };

export interface UploaderContext {
  limit: number | null;
  loaderRefs: LoaderRef[];
}

// Primary machine which will load services (loaderMachines) and handle errorrs etc
const uploaderMachine = createMachine<UploaderContext, UploaderEvent>(
  {
    id: "uploader",
    initial: "empty",
    context,
    states: {
      empty: {
        on: {
          UPLOAD_FILE: "loadFile",
        },
      },
      active: {
        initial: "idle",
        states: {
          idle: {
            always: [
              { target: "#uploader.empty", cond: "isEmpty" },
              { target: "limit", cond: "isLimitReached" },
            ],
            on: {
              UPLOAD_FILE: "#uploader.loadFile",
              UPLOAD_FILE_COMPLETE: {},
              UPLOAD_FILE_ERROR: {},
              UPLOAD_FILE_REMOVE: { actions: ["removeLoader"] },
            },
          },
          limit: {
            always: [{ target: "idle", cond: "isNotLimitReached" }],
            on: {
              UPLOAD_FILE_REMOVE: { actions: ["removeLoader"] },
            },
          },
        },
      },
      loadFile: {
        id: "loadfile",
        entry: ["spawnLoader"],
        always: "active",
      },
    },
  },
  {
    actions,
    guards,
  }
);

export type UploaderMachine = typeof uploaderMachine;

export default uploaderMachine;
