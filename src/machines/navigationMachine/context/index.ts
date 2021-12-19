import { NavigationContext } from "..";

const context: NavigationContext = {
  active: false,
  version: "v0.0.0",
  path: "",
  breadcrumb: {
    list: [],
  },
  primary: {
    posY: 0,
    pongActive: false,
    active: {
      id: "projects",
      label: "Projects",
      href: "/projects",
    },
    list: [
      {
        id: "projects",
        label: "Projects",
        href: "/projects",
      },
      {
        id: "calendar",
        label: "Calendar",
        href: "/calendar",
      },
      {
        id: "directory",
        label: "Directory",
        href: "/directory",
      },
      {
        id: "messages",
        label: "Messages",
        href: "/messages",
      },
    ],
  },
  // NOTE - Hardcoded for now, will need to generate routes dynamically when working through the integration
  secondary: {
    posY: 0,
    pongActive: false,
    root: {
      id: "23234234234",
      label: "Vertigo",
      href: "/projects/23234234234",
    },
    list: [
      {
        id: "roles",
        label: "Roles",
        href: "/projects/23234234234/roles",
      },
      {
        id: "sessions",
        label: "Sessions",
        href: "/projects/23234234234/sessions",
      },
      {
        id: "status-report",
        label: "Status Report",
        href: "/projects/23234234234/status-report",
      },
      {
        id: "channels",
        label: "Channels",
        href: "/projects/23234234234/channels",
      },
    ],
  },
};

export default context;
