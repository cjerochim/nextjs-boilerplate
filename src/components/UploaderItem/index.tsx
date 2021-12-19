import { IconButton } from "@mui/material";
import { useActor } from "@xstate/react";
import { AnimatePresence } from "framer-motion";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ReplayIcon from "@mui/icons-material/Replay";
import ErrorIcon from "@mui/icons-material/Error";

import { LoaderRef } from "src/machines/uploaderMachine/actors/loaderActor";

import {
  FileItem,
  FileName,
  FileItemGroup,
  FileItemProgressBar,
  FileItemProgressBarInner,
  FileItemGroupInner,
  FileErrorGroup,
} from "./styles";

interface UploaderItemProps {
  actor: LoaderRef;
  error?: boolean;
}

const UploaderItem = ({ actor, error }: UploaderItemProps) => {
  const [state, send] = useActor(actor);
  const { context } = state;

  // TODO - investigate what this should be
  const onCancelHandler = (e: any) => {
    e.preventDefault();
    send({ type: "CANCEL" });
  };

  const onRetryHandler = (e: any) => {
    e.preventDefault();
    send({ type: "RETRY" });
  };

  const {
    context: { file },
  } = state;
  return (
    <FileItem>
      <AnimatePresence>
        {state.hasTag("error") && (
          <FileItemGroup
            key="error"
            transition={{ type: "spring" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FileItemGroupInner error={error}>
              <FileName opacity={1.0}>{file!.name}</FileName>
              <FileErrorGroup>
                <ErrorIcon />
                <IconButton component="span" onClick={onRetryHandler}>
                  <ReplayIcon color={error ? "error" : "primary"} />
                </IconButton>
              </FileErrorGroup>
            </FileItemGroupInner>
          </FileItemGroup>
        )}
        {state.hasTag("loading") && (
          <FileItemGroup
            key="loading"
            transition={{ type: "spring" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FileItemGroupInner error={error}>
              <FileName opacity={0.5}>{file!.name}</FileName>
              <FileItemProgressBar>
                <FileItemProgressBarInner percent={context.progress} />
              </FileItemProgressBar>
            </FileItemGroupInner>
          </FileItemGroup>
        )}
        {state.hasTag("complete") && (
          <FileItemGroup
            key="complete"
            transition={{ type: "spring", delay: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FileItemGroupInner error={error}>
              <FileName opacity={1.0}>{file!.name}</FileName>
              <IconButton component="span" onClick={onCancelHandler}>
                <DeleteForeverIcon color={error ? "error" : "primary"} />
              </IconButton>
            </FileItemGroupInner>
          </FileItemGroup>
        )}
      </AnimatePresence>
    </FileItem>
  );
};

export default UploaderItem;
