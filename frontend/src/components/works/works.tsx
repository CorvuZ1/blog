import { FC, useState } from "react";
import { IWorksFiltersProps, WorksFilters } from "~/components/works-filters/works-filters";
import { IWorksListProps, WorksList } from "~/components/works-list/works-list";

export interface IWorksProps {
  className?: string;
  items: IWorksListProps["items"];
  types: IWorksFiltersProps["types"];
  resultsCount: IWorksFiltersProps["resultsCount"];
}

export const Works: FC<IWorksProps> = props => {
  const { items, className, types, resultsCount } = props;

  const [isGridDisplay, setIsGridDisplay] = useState<boolean>(false);

  return (
    <div className={className}>
      <WorksFilters
        resultsCount={resultsCount}
        types={types}
        animationSide="right"
        setIsGridDisplay={setIsGridDisplay}
        isGridDisplay={isGridDisplay}
      />
      <WorksList items={items} isGridDisplay={isGridDisplay} />
    </div>
  );
};
