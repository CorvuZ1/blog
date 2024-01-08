import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "~/components/icon/icon";

export interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Search: FC<ISearchProps> = props => {
  const { className, ...rest } = props;

  return (
    <div
      className={twMerge(
        "bg-dark-green relative flex flex-col justify-center overflow-hidden rounded-[5px]",
        className
      )}
    >
      <Icon name="loupe" className="text-light-green absolute left-[8px]" />
      <input
        className="text-light-green h-full w-full bg-transparent py-[8px] pl-[38px] text-lg placeholder:text-inherit placeholder:opacity-60"
        {...rest}
        type="text"
      />
    </div>
  );
};
