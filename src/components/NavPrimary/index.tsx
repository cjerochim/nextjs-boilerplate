import { useActor } from "@xstate/react";
import { useRef } from "react";
import NavLink from "src/components/NavLink";
import {
  NavigationContext,
  NavigationEvent,
} from "src/machines/navigationMachine";
import { Interpreter } from "xstate";

import { Pong, Base, BaseList, BaseInner } from "./styles";

interface NavPrimaryProps {
  actor: Interpreter<NavigationContext, any, NavigationEvent>;
  onNavSelect: () => void;
}

const NavPrimary = ({ onNavSelect, actor }: NavPrimaryProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [state, send] = useActor(actor);

  const {
    context: { primary },
  } = state;

  // Handler to determine view values to update state
  const onUpdateHandler = (posY: number) => {
    const offset = 8;
    const parentY = navRef.current!.getBoundingClientRect().top;
    send({ type: "PONG_POSITION_UPDATE", pos: posY - parentY + offset });
  };

  return (
    <Base initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BaseInner ref={navRef}>
        <Pong
          animate={{ y: primary.posY, opacity: primary.pongActive ? 1 : 0 }}
          transition={{ type: "spring", duration: 0.4 }}
        />
        <BaseList>
          {primary.list.map((item) => (
            <li key={item.id}>
              <NavLink
                onUpdate={onUpdateHandler}
                onClick={onNavSelect}
                href={item.href}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </BaseList>
      </BaseInner>
    </Base>
  );
};

export default NavPrimary;
