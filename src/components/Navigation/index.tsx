import { useActor } from "@xstate/react";
import type { Interpreter } from "xstate";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Brand from "src/components/Brand";
import NavPrimary from "src/components/NavPrimary";
import NavSecondary from "src/components/NavSecondary";

import {
  NavigationContext,
  NavigationEvent,
} from "src/machines/navigationMachine";

import { Base, BaseFooter, BaseHeader, BaseBody, CloseButton } from "./styles";

interface NavigationProps {
  actor: Interpreter<NavigationContext, any, NavigationEvent>;
}

const Navigation = ({ actor }: NavigationProps) => {
  const [state, send] = useActor(actor);
  const { context } = state;

  return (
    <Base>
      <BaseHeader>
        <CloseButton onClick={() => send({ type: "INACTIVE" })} color="primary">
          <CloseIcon fontSize="medium" />
        </CloseButton>
        <Brand onClick={() => send({ type: "INACTIVE" })} />
      </BaseHeader>
      <BaseBody>
        {state.matches("primary") && (
          <NavPrimary
            actor={actor}
            onNavSelect={() => send({ type: "INACTIVE" })}
          />
        )}
        {state.matches("secondary") && (
          <NavSecondary
            actor={actor}
            onNavSelect={() => send({ type: "INACTIVE" })}
          />
        )}
      </BaseBody>
      <BaseFooter>
        <Typography variant="h6">{context.version}</Typography>
      </BaseFooter>
    </Base>
  );
};

export default Navigation;
