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

  const buttonsStyles =
    "py-[2px] px-[5px] bg-dark-green hover:bg-green duration-300 disabled:opacity-50 disabled:hover:bg-dark-green border-solid border-[1px] border-transparent disabled:border-transparent hover:border-white";

  return (
    <div className={twMerge("mx-auto flex w-fit", className)}>
      <button
        disabled={currentPage === 1}
        onClick={onPrevClick}
        className={twMerge(buttonsStyles, "mr-[1px] rounded-bl-2xl rounded-tl-2xl")}
      >
        <Icon name="arrow" className="rotate-180" />
      </button>
      <div className="bg-dark-green flex items-center px-[20px]">
        {currentPage}
        <span className="relative bottom-[1px] mx-[5px]">/</span>
        {countPage}
      </div>
      <button
        disabled={currentPage === countPage}
        onClick={onNextClick}
        className={twMerge(buttonsStyles, "ml-[1px] rounded-br-2xl rounded-tr-2xl")}
      >
        <Icon name="arrow" />
      </button>
    </div>
  );
};
