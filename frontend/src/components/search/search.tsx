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
        "bg-dark-green relative flex flex-col justify-center rounded-[5px]",
        className
      )}
    >
      <Icon name="loupe" className="text-light-green absolute left-[16px]" />
      <input
        className="text-light-green h-full w-full rounded-[5px] bg-transparent py-[8px] pl-[46px] text-lg placeholder:text-inherit placeholder:opacity-60"
        {...rest}
        type="text"
      />
    </div>
  );
};
