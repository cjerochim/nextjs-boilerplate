import { assign, spawn } from "xstate";
import { UploaderContext, UploaderEvent } from "..";
import loaderActor from "../actors/loaderActor";

export const log = (ctx: UploaderContext, evt: UploaderEvent) =>
  console.log(ctx, evt);

export const spawnLoader = assign<UploaderContext, UploaderEvent>({
  loaderRefs: (ctx: UploaderContext, evt: UploaderEvent) => {
    if (evt.type !== "UPLOAD_FILE") return ctx.loaderRefs;

    // TODO - consider rules around unique files
    // Define a unique id
    const id = `file-name-${evt.file.name}-${ctx.loaderRefs.length}`;

    return [
      ...ctx.loaderRefs,
      spawn(loaderActor.withContext({ file: evt.file, id, progress: 0 }), id),
    ];
  },
});

export const removeLoader = assign<UploaderContext, UploaderEvent>({
  loaderRefs: (ctx: UploaderContext, evt: UploaderEvent) => {
    if (evt.type !== "UPLOAD_FILE_REMOVE") return ctx.loaderRefs;

    // Locate ref
    const ref = ctx.loaderRefs.find((v) => v.id === evt.id);
    if (typeof ref === "undefined") return ctx.loaderRefs;
    // Garbage collect
    ref.stop!();

    // Clean up
    const filtered = ctx.loaderRefs.filter((v) => v.id !== evt.id);
    return filtered;
  },
});
