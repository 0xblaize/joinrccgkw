type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  large?: boolean;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  as = "div",
}: Props) {
  const Tag = as as React.ElementType;
  return <Tag className={className}>{children}</Tag>;
}
