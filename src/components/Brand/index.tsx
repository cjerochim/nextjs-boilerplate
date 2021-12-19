import Link from "next/link";
import { Base, BrandLink, VisuallyHidden } from "./styles";

interface BrandProps {
  onClick?: () => void;
}

const Brand = ({ onClick }: BrandProps) => (
  <Base>
    <Link href="/">
      <BrandLink
        onClick={() => (typeof onClick !== "undefined" ? onClick() : null)}
      >
        <VisuallyHidden>Home</VisuallyHidden>
      </BrandLink>
    </Link>
  </Base>
);

export default Brand;
