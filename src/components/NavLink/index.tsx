import { useRouter } from "next/router";
import { ReactNode, useRef, useEffect } from "react";
import Link from "next/link";

import { NavItem } from "./styles";
import isMatchPath from "src/utils/isMatchPath";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary";
  onClick: () => void;
  onUpdate: (posY: number) => void;
}

const NavLink = ({
  href,
  children,
  onClick,
  onUpdate,
  variant,
}: NavLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  // Determine if active link and notify parent of position
  useEffect(() => {
    if (isMatchPath(router.asPath, href)) {
      const posY = ref.current!.getBoundingClientRect().top;
      onUpdate(posY);
    }
  }, [router, href]);

  return (
    <Link href={href}>
      <NavItem
        variant={variant}
        ref={ref}
        active={isMatchPath(router.asPath, href)}
        onClick={() => onClick()}
      >
        {children}
      </NavItem>
    </Link>
  );
};

NavLink.defaultProps = {
  variant: "primary",
};

export default NavLink;
