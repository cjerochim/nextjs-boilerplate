import styled from "@emotion/styled";
import space from "src/utils/space";
import Image from "./assets/brand.svg";

export const Base = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
  font-size: ${space()};
`;

export const BrandLink = styled.a`
  position: relative;
  display: block;
  font-size: 1em;
  width: 4.375em;
  height: 1.975em;
  background-image: url(${Image.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  cursor: pointer;
`;

export const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
