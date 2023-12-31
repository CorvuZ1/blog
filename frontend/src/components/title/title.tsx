import { FC, ReactNode, JSX } from "react";
import { twMerge } from "tailwind-merge";
import { withAnimation } from "~/lib/hocs/with-animation";

export interface ITitleProps {
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

export const _Title: FC<ITitleProps> = props => {
  const { tag, children, className } = props;

  const Tag = tag || "h1";

  return (
    <Tag
      className={twMerge(
        "before:bg-light-green text-xxl relative mb-[40px] w-fit pb-[2px] pr-[20px] before:absolute before:bottom-[-10px] before:left-0 before:block before:h-[10px] before:w-full before:rounded-[3px]",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const Title = withAnimation<ITitleProps>(_Title);
