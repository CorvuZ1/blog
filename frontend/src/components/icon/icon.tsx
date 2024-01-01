import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface IIconProps {
  className?: string;
  name: string;
}

export const Icon: FC<IIconProps> = props => {
  const { name, className } = props;

  const iconsStyles: Record<typeof name, string> = {
    loupe: "w-[16px] h-[15px]"
  };

  return (
    <svg className={twMerge("inline-block text-current", iconsStyles[name], className)}>
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};
