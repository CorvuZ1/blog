import { FC, useState } from "react";

export interface IWorksProps {
  className?: string;
  items: [];
}

export const Works: FC<IWorksProps> = props => {
  const { items, className } = props;

  const [data, setData] = useState(items);

  return <div className={className}></div>;
};
