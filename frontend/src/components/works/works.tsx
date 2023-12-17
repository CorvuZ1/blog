import { FC, useState } from "react";

export interface IWorksProps {
  className?: string;
  items: [];
}

export const Works: FC<IWorksProps> = props => {
  const [filters, setFilters] = useState({
    search: "",
    display: "row",
    date: "desc",
    type: ""
  });

  return <div></div>;
};
