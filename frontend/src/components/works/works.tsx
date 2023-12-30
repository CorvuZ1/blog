import { FC, useState } from "react";
import { WorksFilters } from "~/components/works-filters/works-filters";
import { WorksList } from "~/components/works-list/works-list";
import { IWorkCardProps } from "~/components/word-card/word-card";

export interface IWorksProps {
  className?: string;
  items: IWorkCardProps[];
}

export const Works: FC<IWorksProps> = props => {
  const { items, className } = props;

  const [isGridDisplay, setIsGridDisplay] = useState<boolean>(false);

  return (
    <div className={className}>
      <WorksFilters animationSide="right" />
      <WorksList items={items} isGridDisplay={isGridDisplay} />
    </div>
  );
};
