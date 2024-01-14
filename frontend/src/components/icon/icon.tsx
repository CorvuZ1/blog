import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface IIconProps {
  className?: string;
  name: string;
}

export const Icon: FC<IIconProps> = props => {
  const { name, className } = props;

  const iconsStyles: Record<IIconProps["name"], string> = {
    loupe: "w-[16px] h-[15px]",
    row: "w-[17px] h-[11px]",
    grid: "w-[16px] h-[16px]",
    clock: "w-[18px] h-[18px]",
    arrow: "w-[32px] h-[32px]"
  };

  return (
    <svg className={twMerge("inline-block text-current", iconsStyles[name], className)}>
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};
