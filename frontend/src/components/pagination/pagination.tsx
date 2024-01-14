import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "~/components/icon/icon";

export interface IPaginationProps {
  currentPage: number;
  countPage: number;
  onNextClick: () => void;
  onPrevClick: () => void;
  className?: string;
}

export const Pagination: FC<IPaginationProps> = props => {
  const { currentPage, countPage, onPrevClick, onNextClick, className } = props;

  return (
    <div className={twMerge("mx-auto flex w-fit items-center", className)}>
      <button disabled={currentPage === 1} onClick={onPrevClick} className="disabled:opacity-50">
        <Icon name="arrow" className="rotate-180" />
      </button>
      <div className="mx-[10px]">
        {currentPage} / {countPage}
      </div>
      <button
        disabled={currentPage === countPage}
        onClick={onNextClick}
        className="disabled:opacity-50"
      >
        <Icon name="arrow" />
      </button>
    </div>
  );
};
