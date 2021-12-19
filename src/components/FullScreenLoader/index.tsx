import { Backdrop, CircularProgress } from "@mui/material";

import { Base } from "./styles";

interface FullScreenLoaderProps {
  loading?: boolean;
}

const FullScreenLoader = ({ loading }: FullScreenLoaderProps) => (
  <Base open={loading!}>
    <CircularProgress />
  </Base>
);

FullScreenLoader.defaultProps = {
  loading: false,
};

export default FullScreenLoader;
