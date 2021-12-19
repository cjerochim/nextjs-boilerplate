import { useRef } from "react";
import type { ChangeEvent } from "react";
import { Interpreter } from "xstate";

import { useActor } from "@xstate/react";

import { UploaderContext, UploaderEvent } from "src/machines/uploaderMachine";
import UploaderItem from "src/components/UploaderItem";
import Button from "src/components/Button";

import { Base, Panel, Input, PanelList, PanelFooter } from "./styles";
import { FormHelperText } from "@mui/material";

interface UploaderProps {
  id: string;
  error?: boolean;
  helperText?: string;
  accept?: string;
  actor: Interpreter<UploaderContext, any, UploaderEvent>;
}

const Uploader = ({ id, accept, actor, error, helperText }: UploaderProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [state, send] = useActor(actor);
  const { context } = state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // Limit to one file at a time
    const file = e?.target?.files![0];
    // Notify machine
    send({ type: "UPLOAD_FILE", file });
    // Empty input to allow additional files
    ref.current!.value = "";
  };

  return (
    <Base htmlFor={id}>
      <Panel active={state.matches("active")}>
        <PanelList>
          {context.loaderRefs.map((v) => (
            <li key={v.id}>
              <UploaderItem actor={v} error={error} />
            </li>
          ))}
        </PanelList>
        <Input
          ref={ref}
          id={id}
          accept={accept}
          type="file"
          onChange={onChangeHandler}
        />
      </Panel>
      {helperText!.length > 0 && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
      <PanelFooter>
        <Button component="span">Upload file</Button>
      </PanelFooter>
    </Base>
  );
};

Uploader.defaultProps = {
  accept: "image/*",
  status: "default",
  helperText: "",
};

export default Uploader;
