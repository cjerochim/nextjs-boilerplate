import { useRef } from "react";
import { Interpreter } from "xstate";
import { useActor } from "@xstate/react";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import NavLink from "src/components/NavLink";

import {
  Base,
  BaseHeader,
  BaseBody,
  IconButton,
  BaseList,
  Pong,
  Title,
} from "./styles";

import {
  NavigationContext,
  NavigationEvent,
} from "src/machines/navigationMachine";

interface NavSecondaryProps {
  actor: Interpreter<NavigationContext, any, NavigationEvent>;
  onNavSelect: () => void;
}

const NavSecondary = ({ onNavSelect, actor }: NavSecondaryProps) => {
  const baseRef = useRef<HTMLDivElement>(null);
  const [state, send] = useActor(actor);
  const {
    context: { secondary, primary },
  } = state;

  // Handler to determine view values to update state
  const onUpdateHandler = (posY: number) => {
    const offset = 11;
    const parentY = baseRef.current!.getBoundingClientRect().top;
    send({ type: "PONG_POSITION_UPDATE", pos: posY - parentY + offset });
  };

  return (
    <Base>
      <BaseHeader>
        <motion.div
          initial={{ x: 16, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Link href={primary.active.href}>
            <IconButton color="primary">
              <ArrowBackIcon fontSize="medium" />
            </IconButton>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <Link href={secondary.root.href}>
            <Title>{secondary.root.label}</Title>
          </Link>
        </motion.div>
      </BaseHeader>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ type: "spring", duration: 1 }}
        animate={{ opacity: 1 }}
      >
        <BaseBody ref={baseRef}>
          <Pong
            animate={{
              y: secondary.posY,
              opacity: secondary.pongActive ? 1 : 0,
            }}
            transition={{ type: "spring", duration: 0.4 }}
          />
          <BaseList>
            {secondary.list.map((item) => (
              <li key={item.id}>
                <NavLink
                  variant="secondary"
                  onUpdate={onUpdateHandler}
                  onClick={onNavSelect}
                  href={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </BaseList>
        </BaseBody>
      </motion.div>
    </Base>
  );
};

export default NavSecondary;
