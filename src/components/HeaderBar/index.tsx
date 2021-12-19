import { ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brand from "src/components/Brand";
import { Base, BaseLeading, BaseBody, BaseActions, BaseMenu } from "./styles";

interface HeaderBarProps {
  breadcrumb?: ReactNode;
  actions?: ReactNode;
  onOpen: () => void;
}

const HeaderBar = ({ onOpen, breadcrumb, actions }: HeaderBarProps) => {
  return (
    <Base>
      <BaseLeading>
        <BaseMenu>
          <IconButton onClick={() => onOpen()} color="secondary">
            <MenuIcon fontSize="medium" />
          </IconButton>
        </BaseMenu>
        <Brand />
      </BaseLeading>
      <BaseBody>{breadcrumb}</BaseBody>
      <BaseActions>{actions}</BaseActions>
    </Base>
  );
};

export default HeaderBar;
