import styled from "@emotion/styled";
import em from "src/utils/em";
import maxWidth from "src/utils/maxWidth";
import mq from "src/utils/mq";
import space from "src/utils/space";

export const Base = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding-left: ${space()};
  padding-right: ${space()};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[800]}`};
`;

export const HeaderInner = styled.div`
  position: relative;
  max-width: ${maxWidth()};
  margin-left: auto;
  margin-right: auto;
`;

export const Body = styled.section`
  position: relative;
  padding-left: ${space()};
  padding-right: ${space()};
  width: 100%;
  flex: 1;
`;

export const BodyInner = styled.div`
  position: relative;
  max-width: ${maxWidth()};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100%;
`;

export interface NavProps {
  active: boolean;
}

export const Nav = styled.div<NavProps>`
  position: fixed;
  width: ${({ theme }) => em(theme.app.navWidthXS)};
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  top: 0;
  transform: ${({ active, theme }) =>
    active
      ? `translate3d(-1em, 0, 0)`
      : `translate3d(${em((theme.app.navWidthXS! + 16) * -1)}, 0, 0)`};
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  background-color: ${({ theme }) => theme.palette.background.default};
  ${mq("md")} {
    position: relative;
    width: ${({ theme }) => em(theme.app.navWidthMD)};
    transform: translate3d(0, 0, 0);
    transition-property: none;
    top: unset;
  }
`;

export const NavOverlay = styled.button<NavProps>`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  border: none;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.background.paper};
  transition-property: opacity, visibility;
  transition-duration: ${({ active }) => (active ? "0.2s" : "0.5s")};
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  opacity: ${({ active }) => (active ? "1.0" : "0.0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  ${mq("md")} {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition-property: none;
  }
`;

export const Stage = styled.div`
  position: relative;
  flex: 1;
  padding: ${space()};
`;
