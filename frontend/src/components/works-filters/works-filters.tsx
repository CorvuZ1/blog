import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { withAnimation } from "~/lib/hocs/with-animation";

export interface IWorksFiltersProps {
  className?: string;
}

const _WorksFilters: FC<IWorksFiltersProps> = ({ className }) => {
  return (
    <div className={twMerge("", className)}>
      <div>search viewtypes</div>
      <div>select select</div>
    </div>
  );
};

export const WorksFilters = withAnimation(_WorksFilters);
