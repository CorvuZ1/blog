import { FC, ReactNode, SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export const Select: FC<ISelectProps> = props => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={twMerge(
        "bg-dark-green relative flex items-center rounded-[5px] after:absolute after:bottom-[12px] after:right-[10px] after:border-[6px] after:border-solid after:border-transparent after:content-['']",
        className,
        "after:border-t-light-green"
      )}
    >
      <select
        {...rest}
        className="bg-dark-green text-light-green h-full w-full appearance-none rounded-[5px] p-[10px] pr-[20px]"
      >
        {children}
      </select>
    </div>
  );
};
