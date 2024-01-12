import { SpinnerProps, Spinner } from "@material-tailwind/react";
import { FC, Ref } from "react";
import { twMerge } from "tailwind-merge";

export interface ILoaderProps extends SpinnerProps {
  ref?: Ref<SVGSVGElement>;
}

export const Loader: FC<ILoaderProps> = props => {
  const { className, ref, ...rest } = props;

  return (
    <Spinner
      {...rest}
      ref={ref}
      className={twMerge(
        "text-light-green/80 h-12 w-12 [&_path:nth-child(1)]:hidden [&_path:nth-child(2)]:stroke-[white]",
        className
      )}
    />
  );
};
