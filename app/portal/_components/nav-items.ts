import { HomeIcon, ConnectIcon, GiveIcon, MeIcon } from "./icons";

export type NavItem = {
  href: string;
  label: string;
  Icon: (p: { width?: number; height?: number; className?: string }) => React.ReactElement;
  exact?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/portal", label: "Home", Icon: HomeIcon, exact: true },
  { href: "/portal/connect", label: "Connect", Icon: ConnectIcon },
  { href: "/portal/give", label: "Give", Icon: GiveIcon },
  { href: "/portal/me", label: "Me", Icon: MeIcon },
];

export function isNavActive(pathname: string, item: NavItem): boolean {
  if (item.exact) return pathname === item.href;
  return pathname === item.href || pathname.startsWith(item.href + "/");
}
