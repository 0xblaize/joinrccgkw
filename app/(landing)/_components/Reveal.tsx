import { createElement } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  large?: boolean;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  as = "div",
}: Props) {
  return createElement(as, { className }, children);
}
