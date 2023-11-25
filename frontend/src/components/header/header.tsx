import { FC } from "react";

export interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  return <header className={className}>header</header>;
};
