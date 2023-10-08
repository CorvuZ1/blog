import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "flex min-h-screen items-center justify-center bg-gradient-to-r text-center text-6xl font-bold text-white",
  {
    variants: {
      status: {
        error: "from-[#ee7474] to-red-500",
        success: "from-cyan-500 to-blue-500"
      }
    },
    defaultVariants: {
      status: "success"
    }
  }
);

export interface IHelloWorldProps {
  message: string;
}

export const HelloWorld: FC<IHelloWorldProps & VariantProps<typeof variants>> = props => {
  const { message, status } = props;

  return <div className={twMerge(variants({ status }))}>{message}</div>;
};
