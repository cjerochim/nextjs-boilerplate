import styled from "@emotion/styled";
import { alpha } from "@mui/material";
import { motion } from "framer-motion";
import em from "src/utils/em";
import space from "src/utils/space";

export const FileItem = styled.span`
  position: relative;
  display: block;
  height: ${em(40)};
`;

export const FileItemGroup = styled(motion.span)`
  position: absolute;
  height: ${em(40)};
  width: 100%;
  top: 0;
  display: block;
`;

interface FileItemGroupInnerProps {
  error?: boolean;
}

export const FileItemGroupInner = styled.span<FileItemGroupInnerProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, error }) =>
    error ? theme.palette.error.main : "inherit"};
`;

export const FileErrorGroup = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin-right: ${space(1)};
  }
`;

interface FileNameProps {
  opacity: number;
}

export const FileName = styled.span<FileNameProps>`
  position: relative;
  display: block;
  width: 5em;
  margin-right: ${space()};
  flex: 1;
  white-space: nowrap;
  opacity: ${({ opacity }) => `${opacity}`};
  overflow: hidden;
  color: inherit;
  text-overflow: ellipsis;
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
`;

export const FileItemProgressBar = styled.span`
  position: relative;
  display: block;
  margin-top: ${em(18)};
  margin-bottom: ${em(18)};
  height: ${em(4)};
  flex: 1.1;
  background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.4)};
  border-radius: 2px;
  overflow: hidden;
`;

interface FileItemProgressBarInnerProps {
  percent: number;
}

export const FileItemProgressBarInner = styled.span<FileItemProgressBarInnerProps>`
  position: relative;
  height: 100%;
  display: block;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  width: ${({ percent }) => `${percent}%`};
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;
