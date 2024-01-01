import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "~/components/icon/icon";

export interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Search: FC<ISearchProps> = props => {
  const { className, ...rest } = props;

  return (
    <div className={twMerge("bg-dark-green", className)}>
      <Icon name="loupe" />
      <input className="bg-transparent" autoComplete="nope" {...rest} type="text" />
    </div>
  );
};
