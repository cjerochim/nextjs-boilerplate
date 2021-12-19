import { type } from "os";
import { ActorRef, assign, createMachine, sendParent } from "xstate";
import { UploaderEvent } from "..";

export type LoaderEvent = { type: "CANCEL" } | { type: "RETRY" };

export interface LoaderContext {
  id: string | null;
  file: File | null;
  progress?: number;
}

const context: LoaderContext = {
  id: null,
  file: null,
  progress: 50,
};

export type LoaderRef = ActorRef<LoaderEvent>;

const loaderActor = createMachine<LoaderContext, LoaderEvent>(
  {
    id: "loader",
    initial: "init",
    context,
    states: {
      init: {
        entry: ["resetProgress"],
        always: "upload",
      },
      upload: {
        tags: ["loading"],

        // TODO - Simulate loading
        after: {
          500: { target: "progress", actions: ["increment"] },
        },
      },
      progress: {
        tags: ["loading"],
        always: [
          { target: "error", cond: "isError" },
          { target: "complete", cond: "isComplete" },
          { target: "upload" },
        ],
      },
      complete: {
        tags: ["complete"],
        entry: ["notifyComplete"],
        on: {
          CANCEL: { target: "cancel" },
        },
      },
      cancel: {
        entry: ["notifyRemove"],
        type: "final",
      },
      error: {
        tags: ["error"],
        entry: ["notifyError"],
        on: {
          RETRY: "init",
        },
      },
    },
  },
  {
    guards: {
      isComplete: (ctx) => ctx.progress == 100,
      isError: () => Math.random() < 0.05,
    },
    actions: {
      resetProgress: assign<LoaderContext, LoaderEvent>({
        progress: 0,
      }),
      increment: assign<LoaderContext, LoaderEvent>({
        progress: (ctx) => (ctx.progress! += 20),
      }),
      notifyRemove: sendParent<LoaderContext, LoaderEvent, UploaderEvent>(
        (ctx) => ({ type: "UPLOAD_FILE_REMOVE", id: ctx.id })
      ),
      notifyComplete: sendParent<LoaderContext, LoaderEvent, UploaderEvent>(
        (ctx) => ({
          type: "UPLOAD_FILE_COMPLETE",
          id: ctx.id,
        })
      ),
      notifyError: sendParent<LoaderContext, LoaderEvent, UploaderEvent>(
        (ctx) => ({
          type: "UPLOAD_FILE_ERROR",
          id: ctx.id,
        })
      ),
    },
  }
);

export default loaderActor;
