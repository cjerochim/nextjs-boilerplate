import { useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { useMachine } from "@xstate/react";

import HeaderBar from "src/components/HeaderBar";
import LayoutDashboardBase from "src/components/LayoutDashboardBase";
import { Breadcrumbs, BreadCrumbLink } from "src/components/Breadcrumbs";
import Navigation from "src/components/Navigation";
import navigationMachine from "src/machines/navigationMachine";

interface DashboardPageProps {
  children: ReactNode;
}

const DashboardPage = ({ children }: DashboardPageProps) => {
  const router = useRouter();
  const [state, send, actor] = useMachine(navigationMachine);

  const {
    active,
    breadcrumb: { list },
  } = state.context;

  useEffect(() => {
    const path = router.asPath;
    send({ type: "UPDATE", path });
    send({ type: "PONG_ACTIVE_POSITION", path });
  }, [router]);

  return (
    <LayoutDashboardBase
      active={active}
      onClose={() => send({ type: "INACTIVE" })}
      header={
        <HeaderBar
          onOpen={() => send({ type: "ACTIVE" })}
          breadcrumb={
            <Breadcrumbs aria-label="breadcrumb">
              {list.map((v, index) => {
                const isLast = index === list.length - 1;
                if (isLast) {
                  return (
                    <Typography key={v.id} color="inherit">
                      {v.label}
                    </Typography>
                  );
                }
                return (
                  <Link key={v.id} href={v.href}>
                    <BreadCrumbLink underline="hover" color="inherit">
                      {v.label}
                    </BreadCrumbLink>
                  </Link>
                );
              })}
            </Breadcrumbs>
          }
        />
      }
      navigation={<Navigation actor={actor} />}
    >
      {children}
    </LayoutDashboardBase>
  );
};

export default DashboardPage;
