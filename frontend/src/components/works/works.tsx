import { FC, useState } from "react";
import { IWorksFiltersProps, WorksFilters } from "~/components/works-filters/works-filters";
import { IWorksListProps, WorksList } from "~/components/works-list/works-list";
import { IPaginationProps, Pagination } from "~/components/pagination/pagination";
import { useRouter } from "next/router";

export interface IWorksProps {
  className?: string;
  items: IWorksListProps["items"];
  types: IWorksFiltersProps["types"];
  currentPage: IPaginationProps["currentPage"];
  countPage: IPaginationProps["countPage"];
  resultsCount: IWorksFiltersProps["resultsCount"];
}

export const Works: FC<IWorksProps> = props => {
  const { items, className, types, resultsCount, currentPage, countPage } = props;

  const [isGridDisplay, setIsGridDisplay] = useState<boolean>(false);
  const { query, push } = useRouter();

  const currentPageParam = parseInt(query.page as string);

  const onPrevPageClick = () => {
    const page = currentPageParam - 1;

    push({
      query: { ...query, page }
    });
  };

  const onNextPageClick = () => {
    const page = currentPageParam ? currentPageParam + 1 : 2;

    push({
      query: { ...query, page }
    });
  };

  return (
    <div className={className}>
      <WorksFilters
        resultsCount={resultsCount}
        types={types}
        animationSide="right"
        isGridDisplay={isGridDisplay}
        className="mb-[40px]"
        setIsGridDisplay={setIsGridDisplay}
      />
      <WorksList items={items} isGridDisplay={isGridDisplay} />
      {countPage > 0 && (
        <Pagination
          currentPage={currentPage}
          countPage={countPage}
          className="mt-[40px]"
          onPrevClick={onPrevPageClick}
          onNextClick={onNextPageClick}
        />
      )}
    </div>
  );
};
