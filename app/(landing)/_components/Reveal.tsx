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
  as: Tag = "div",
}: Props) {
  return <Tag className={className}>{children}</Tag>;
}
